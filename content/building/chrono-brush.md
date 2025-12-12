---
title: "Chrono-Brush"
date: 2024-01-01
description: "A lightweight, composable time-series cleaning pipeline."
cover:
  image: ""
  alt: "Chrono-Brush"
  caption: ""
showToc: true
weight: 10
status: "Just for fun"
aim: "To make cleaning time-series data less painful and more composable."
github_url: "https://github.com/davidwardan/chrono-brush"
---

## Overview

**Chrono-Brush** is a Python library I built to handle the dirty work of time-series analysis. It provides scikit-learn compatible transformers to build clean, reproducible preprocessing pipelines.

## Features

- **Outlier Removal**: Statistical methods (IQR, Z-score) to clean noise.
- **Imputation**: Strategies for handling missing values (Forward fill, etc.).
- **Trend Removal**: Prophet-based trend decomposition.
- **Composable**: Fully compatible with `sklearn.pipeline.Pipeline`.

```python
from chrono_brush import OutlierRemover, MissingValueImputer, Pipeline

pipe = Pipeline([
    ("impute", MissingValueImputer(strategy="ffill")),
    ("outliers", OutlierRemover(method="iqr")),
])
cleaned = pipe.fit_transform(series)
```

[View on GitHub](https://github.com/davidwardan/chrono-brush)
