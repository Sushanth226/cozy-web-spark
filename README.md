

## Project info

**URL**: https://lovable.dev/projects/41d8af61-3b35-4ce2-8a17-6bce9fe1d9e7


https://docs.google.com/spreadsheets/d/1u85iAte_wc8Kgtvf4uls5sDJLRMGejDcSthkwIE9ep0/edit?usp=sharing
**Video**:https://drive.google.com/file/d/1EEmZiLjzs70sXlAmeBubfcz7K_xJBtvK/view?usp=sharing

**Title:** AI-Powered Cafe Feedback Summarizer Workflow

**Description:**
An **n8n automation workflow** that uses an AI agent to process structured café customer feedback, generate a **unique one-sentence summary** for each submission, and store it in Google Sheets.
The workflow:

* Accepts customer feedback via **Webhook** in JSON format.
* Uses an AI node to **summarize tone, key points, and improvement suggestions**.
* Flags irrelevant feedback with `"Irrelevant"`.
* Ensures summaries are **differently worded for each customer**.
* Appends or updates summaries in Google Sheets for real-time tracking.

**Tech Stack:**

* n8n (workflow automation)
* OpenAI / AI node for NLP summarization
* Google Sheets API for storage

**Features:**

* Automated feedback processing and summarization
* Dynamic sentence variation for each entry
* Supports append & update modes in Google Sheets
* Simple deployment via n8n instance

**Use Case:**
Ideal for coffee shops, restaurants, or service-based businesses wanting **quick, consistent, and actionable insights** from customer feedback without manual review.

---
