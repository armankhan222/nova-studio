# Database Design

## 1. profiles

Stores user profile information.

| Column | Type |
|---------|------|
| id | uuid (auth.users) |
| full_name | text |
| username | text |
| avatar_url | text |
| bio | text |
| created_at | timestamptz |
| updated_at | timestamptz |

---

## 2. organizations

Teams & companies.

| Column | Type |
|---------|------|
| id | uuid |
| owner_id | uuid |
| name | text |
| slug | text |
| logo_url | text |
| created_at | timestamptz |

---

## 3. organization_members

Users inside organizations.

| Column | Type |
|---------|------|
| id | uuid |
| organization_id | uuid |
| user_id | uuid |
| role | owner/admin/member |
| created_at | timestamptz |

---

## 4. projects

Design projects.

| Column | Type |
|---------|------|
| id | uuid |
| organization_id | uuid |
| owner_id | uuid |
| name | text |
| description | text |
| status | draft/review/completed |
| created_at | timestamptz |
| updated_at | timestamptz |

---

## 5. uploads

Uploaded screenshots.

| Column | Type |
|---------|------|
| id | uuid |
| project_id | uuid |
| file_name | text |
| image_url | text |
| width | integer |
| height | integer |
| created_at | timestamptz |

---

## 6. reviews

AI review results.

| Column | Type |
|---------|------|
| id | uuid |
| upload_id | uuid |
| overall_score | integer |
| ux_score | integer |
| accessibility_score | integer |
| hierarchy_score | integer |
| typography_score | integer |
| spacing_score | integer |
| mobile_score | integer |
| report | jsonb |
| prompt | text |
| created_at | timestamptz |

---

## 7. prompts

Generated prompts.

| Column | Type |
|---------|------|
| id | uuid |
| review_id | uuid |
| provider | text |
| prompt | text |
| created_at | timestamptz |

---

## 8. subscriptions

Billing.

| Column | Type |
|---------|------|
| id | uuid |
| user_id | uuid |
| stripe_customer_id | text |
| stripe_subscription_id | text |
| plan | free/pro/business |
| status | active/cancelled |
| created_at | timestamptz |

---

## 9. notifications

User notifications.

| Column | Type |
|---------|------|
| id | uuid |
| user_id | uuid |
| title | text |
| message | text |
| read | boolean |
| created_at | timestamptz |