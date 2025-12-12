---
title: "Beirut Construction Period Classifier"
date: 2023-09-01
description: "Deep learning model involving transfer learning to classify building ages from street-view photos."
cover:
  image: ""
  alt: "Beirut Building Classifier"
  caption: ""
showToc: true
weight: 2
status: "Maintained"
aim: "To automate urban data collection for disaster risk recovery and historical analysis."
github_url: "https://github.com/davidwardan/BeirutCP_Classifier"
---

## Overview

This project was developed as part of my Master's thesis at the American University of Beirut (AUB). The goal was to characterize the construction period of buildings in Beirut using nothing but street-view imagery and Deep Learning.

The system automates the extraction of building features to aid in socioeconomic analysis and disaster risk assessment.

## Technical Details

- **Architecture**: Fine-tuned **Swin Transformer (SwinT)** model.
- **Pipeline**: Includes data preprocessing, transfer learning optimization, and Bayesian hyperparameter tuning.
- **Interpretability**: Integrated LIME and SHAP for model explainability.
- **Deployment**: Dockerized application with a Gradio interface, also deployed on Hugging Face Spaces.

[View on GitHub](https://github.com/davidwardan/BeirutCP_Classifier)
