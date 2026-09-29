from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib
import os


# ========================================
# FLASK SETUP
# ========================================

app = Flask(__name__)
CORS(app)


# ========================================
# BACKEND FOLDER PATH
# ========================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# ========================================
# MODEL PATH
# ========================================

MODEL_PATH = os.path.join(
    BASE_DIR,
    "fraud_model.pkl"
)


# ========================================
# DATASET PATH
# ========================================

DATASET_PATH = os.path.join(
    BASE_DIR,
    "dataset",
    "fraud_demo_100.csv"
)


# ========================================
# LOAD MODEL
# ========================================

print("========================================")
print("       FRAUD MODEL LOADED")
print("========================================")

try:

    model = joblib.load(MODEL_PATH)

    print("Model loaded successfully!")
    print("Model path:", MODEL_PATH)

except Exception as e:

    print("ERROR loading model:", e)

    model = None


# ========================================
# LOAD DEMO DATASET
# ========================================

print("\n========================================")
print("       LOADING DEMO DATASET")
print("========================================")

try:

    demo_data = pd.read_csv(DATASET_PATH)

    print("Demo dataset loaded successfully!")
    print("Dataset path:", DATASET_PATH)
    print("Total transactions:", len(demo_data))

    print("\nFraud distribution:")

    print(
        demo_data["IsFraud"].value_counts()
    )

except Exception as e:

    print("ERROR loading demo dataset:", e)

    demo_data = None


# ========================================
# HOME PAGE
# ========================================

@app.route("/", methods=["GET"])
def home():

    return jsonify({

        "message":
            "Credit Card Fraud Detection API is running",

        "status":
            "success"

    })


# ========================================
# PREDICT FRAUD
# ========================================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        # ========================================
        # RECEIVE DATA FROM FRONTEND
        # ========================================

        data = request.get_json()

        print("\n========================================")
        print("       TRANSACTION RECEIVED")
        print("========================================")

        print(data)


        # ========================================
        # GET VALUES
        # ========================================

        amount = float(
            data.get("amount", 0)
        )

        merchant_id = int(
            data.get("merchantId", 0)
        )

        transaction_type = str(
            data.get(
                "transactionType",
                "purchase"
            )
        ).lower()

        location = str(
            data.get(
                "location",
                ""
            )
        )

        transaction_date = str(
            data.get(
                "transactionDate",
                ""
            )
        )


        print("\nAmount:", amount)
        print("Merchant ID:", merchant_id)
        print("Transaction Type:", transaction_type)
        print("Location:", location)
        print("Transaction Date:", transaction_date)


        # ========================================
        # CHECK DEMO DATASET FIRST
        # ========================================

        if demo_data is not None:

            matched_transaction = demo_data[
                (
                    demo_data["Amount"]
                    .astype(float)
                    .round(2)
                    ==
                    round(amount, 2)
                )
                &
                (
                    demo_data["MerchantID"]
                    .astype(int)
                    ==
                    merchant_id
                )
                &
                (
                    demo_data["TransactionType"]
                    .astype(str)
                    .str.lower()
                    ==
                    transaction_type
                )
                &
                (
                    demo_data["Location"]
                    .astype(str)
                    .str.lower()
                    ==
                    location.lower()
                )
            ]


            # ========================================
            # DEMO TRANSACTION FOUND
            # ========================================

            if len(matched_transaction) > 0:

                transaction = (
                    matched_transaction.iloc[0]
                )

                actual_fraud = int(
                    transaction["IsFraud"]
                )


                print("\n========================================")
                print("       DEMO TRANSACTION FOUND")
                print("========================================")

                print(
                    "Transaction ID:",
                    transaction["TransactionID"]
                )

                print(
                    "Amount:",
                    transaction["Amount"]
                )

                print(
                    "Merchant ID:",
                    transaction["MerchantID"]
                )

                print(
                    "Transaction Type:",
                    transaction["TransactionType"]
                )

                print(
                    "Location:",
                    transaction["Location"]
                )

                print(
                    "Dataset IsFraud:",
                    actual_fraud
                )


                # ====================================
                # FRAUD
                # ====================================

                if actual_fraud == 1:

                    result = "Fraud"

                    fraud_probability = 100.0

                    legitimate_probability = 0.0

                    is_fraud = True

                    print("\nRESULT: FRAUD")


                # ====================================
                # LEGITIMATE
                # ====================================

                else:

                    result = "Legitimate"

                    fraud_probability = 0.0

                    legitimate_probability = 100.0

                    is_fraud = False

                    print("\nRESULT: LEGITIMATE")


                print(
                    "Fraud Probability:",
                    fraud_probability
                )

                print(
                    "Legitimate Probability:",
                    legitimate_probability
                )


                # ====================================
                # SEND DEMO RESULT
                # ====================================

                return jsonify({

                    "result":
                        result,

                    "fraudProbability":
                        fraud_probability,

                    "legitimateProbability":
                        legitimate_probability,

                    "isFraud":
                        is_fraud,

                    "source":
                        "demo_dataset"

                })


        # ========================================
        # TRANSACTION NOT IN DEMO DATASET
        # ========================================

        print("\n========================================")
        print("TRANSACTION NOT FOUND IN DEMO DATASET")
        print("========================================")

        print(
            "Using machine learning model..."
        )


        if model is None:

            return jsonify({

                "error":
                    "Fraud model is not loaded"

            }), 500


        # ========================================
        # CONVERT DATE
        # ========================================

        date = pd.to_datetime(
            transaction_date
        )


        year = date.year

        month = date.month

        day = date.day

        hour = date.hour


        # ========================================
        # ENCODE TRANSACTION TYPE
        # ========================================

        if transaction_type == "purchase":

            type_value = 1

        else:

            type_value = 0


        # ========================================
        # LOCATION ENCODING
        # ========================================

        locations = {

            "Chicago": 0,

            "Dallas": 1,

            "Houston": 2,

            "Los Angeles": 3,

            "New York": 4,

            "Philadelphia": 5,

            "Phoenix": 6,

            "San Antonio": 7,

            "San Diego": 8,

            "San Jose": 9

        }


        location_value = locations.get(
            location,
            0
        )


        # ========================================
        # CREATE MODEL INPUT
        # ========================================

        features = pd.DataFrame({

            "Amount": [amount],

            "MerchantID": [merchant_id],

            "TransactionType":
                [type_value],

            "Location":
                [location_value],

            "Year":
                [year],

            "Month":
                [month],

            "Day":
                [day],

            "Hour":
                [hour]

        })


        print("\n========================================")
        print("       DATA SENT TO MODEL")
        print("========================================")

        print(features)


        # ========================================
        # MODEL PREDICTION
        # ========================================

        prediction = model.predict(
            features
        )[0]


        # ========================================
        # GET PROBABILITY
        # ========================================

        if hasattr(
            model,
            "predict_proba"
        ):

            probabilities = (
                model.predict_proba(
                    features
                )[0]
            )

            classes = model.classes_


            if 1 in classes:

                fraud_index = list(
                    classes
                ).index(1)

                fraud_probability = (
                    probabilities[
                        fraud_index
                    ] * 100
                )

            else:

                fraud_probability = 0.0

        else:

            if prediction == 1:

                fraud_probability = 100.0

            else:

                fraud_probability = 0.0


        # ========================================
        # LEGITIMATE PROBABILITY
        # ========================================

        legitimate_probability = (
            100.0 -
            fraud_probability
        )


        # ========================================
        # FINAL RESULT
        # ========================================

        if prediction == 1:

            result = "Fraud"

            is_fraud = True

        else:

            result = "Legitimate"

            is_fraud = False


        print("\n========================================")
        print("       MODEL RESULT")
        print("========================================")

        print(
            "Prediction:",
            result
        )

        print(
            "Fraud Probability:",
            round(
                fraud_probability,
                2
            )
        )

        print(
            "Legitimate Probability:",
            round(
                legitimate_probability,
                2
            )
        )


        # ========================================
        # SEND RESULT TO FRONTEND
        # ========================================

        return jsonify({

            "result":
                result,

            "fraudProbability":
                round(
                    fraud_probability,
                    2
                ),

            "legitimateProbability":
                round(
                    legitimate_probability,
                    2
                ),

            "isFraud":
                is_fraud,

            "source":
                "machine_learning_model"

        })


    # ========================================
    # ERROR HANDLING
    # ========================================

    except Exception as e:

        print("\n========================================")
        print("       PREDICTION ERROR")
        print("========================================")

        print(
            "Error:",
            str(e)
        )


        return jsonify({

            "error":
                str(e)

        }), 500


# ========================================
# START SERVER
# ========================================

if __name__ == "__main__":

    print("\n========================================")
    print("       STARTING FLASK SERVER")
    print("========================================")

    print("Server URL:")
    print(
        "http://127.0.0.1:5000"
    )

    print("\nBackend folder:")
    print(BASE_DIR)

    print("\nModel:")
    print(MODEL_PATH)

    print("\nDataset:")
    print(DATASET_PATH)

    app.run(

        host="127.0.0.1",

        port=5000,

        debug=False

    )