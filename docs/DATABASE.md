# Database Design

## users

- id
- email
- name
- avatar
- created_at

---

## projects

- id
- user_id
- name
- description
- created_at

---

## uploads

- id
- project_id
- image_url
- created_at

---

## reviews

- id
- upload_id
- score
- ux_score
- accessibility_score
- prompt
- report

---

## subscriptions

- id
- user_id
- plan
- status

---

## organizations

- id
- owner_id
- name