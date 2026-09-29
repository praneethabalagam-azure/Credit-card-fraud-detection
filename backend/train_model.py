import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report


# ============================================================
# 1. LOAD DATASET
# ============================================================

data = pd.read_csv("dataset/fraud_demo_100.csv")

print("\n========================================")
print("       DATASET LOADED")
print("========================================")

print("Total transactions:", len(data))


# ============================================================
# 2. CHECK FRAUD DISTRIBUTION
# ============================================================

print("\n========================================")
print("       FRAUD DISTRIBUTION")
print("========================================")

print(data["IsFraud"].value_counts())

print("\nFraud Percentage:")

print(data["IsFraud"].value_counts(normalize=True) * 100)


# ============================================================
# 3. CONVERT TRANSACTION DATE
# ============================================================

data["TransactionDate"] = pd.to_datetime(
    data["TransactionDate"]
)

data["Year"] = data["TransactionDate"].dt.year
data["Month"] = data["TransactionDate"].dt.month
data["Day"] = data["TransactionDate"].dt.day
data["Hour"] = data["TransactionDate"].dt.hour


# ============================================================
# 4. FEATURES
# ============================================================

X = data[
    [
        "Amount",
        "MerchantID",
        "TransactionType",
        "Location",
        "Year",
        "Month",
        "Day",
        "Hour"
    ]
]


# ============================================================
# 5. TARGET
# ============================================================

y = data["IsFraud"]


# ============================================================
# 6. SPLIT DATA
# ============================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)


print("\n========================================")
print("       DATA SPLIT")
print("========================================")

print("Training transactions:", len(X_train))
print("Testing transactions:", len(X_test))


# ============================================================
# 7. CATEGORICAL AND NUMERICAL FEATURES
# ============================================================

categorical_features = [
    "TransactionType",
    "Location"
]

numerical_features = [
    "Amount",
    "MerchantID",
    "Year",
    "Month",
    "Day",
    "Hour"
]


# ============================================================
# 8. PREPROCESSING
# ============================================================

preprocessor = ColumnTransformer(
    transformers=[
        (
            "categorical",
            OneHotEncoder(
                handle_unknown="ignore"
            ),
            categorical_features
        ),
        (
            "numerical",
            "passthrough",
            numerical_features
        )
    ]
)


# ============================================================
# 9. RANDOM FOREST MODEL
# ============================================================

random_forest = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
    class_weight="balanced",
    n_jobs=-1
)


# ============================================================
# 10. CREATE COMPLETE PIPELINE
# ============================================================

model = Pipeline(
    steps=[
        (
            "preprocessor",
            preprocessor
        ),
        (
            "classifier",
            random_forest
        )
    ]
)


# ============================================================
# 11. TRAIN MODEL
# ============================================================

print("\n========================================")
print("       TRAINING MODEL")
print("========================================")

model.fit(
    X_train,
    y_train
)

print("Model trained successfully!")


# ============================================================
# 12. TEST MODEL
# ============================================================

predictions = model.predict(X_test)


accuracy = accuracy_score(
    y_test,
    predictions
)


print("\n========================================")
print("       MODEL RESULTS")
print("========================================")

print("Accuracy:", accuracy)


# ============================================================
# 13. CLASSIFICATION REPORT
# ============================================================

print("\nClassification Report:")

print(
    classification_report(
        y_test,
        predictions,
        target_names=[
            "Legitimate",
            "Fraud"
        ],
        zero_division=0
    )
)


# ============================================================
# 14. SAVE COMPLETE MODEL
# ============================================================

joblib.dump(
    model,
    "fraud_model.pkl"
)


print("\n========================================")
print("       MODEL SAVED")
print("========================================")

print("Saved as: fraud_model.pkl")

print("\nTraining completed successfully!")