## InsightHub

An internal analytics dashboard for companies to monitor users, business KPIs, and system activity in real time.

### Permissions

| Role    | Access              |
| ------- | ------------------- |
| Admin   | Full access         |
| Manager | Analytics + reports |
| User    | Personal dashboard  |

### Architecture

src/
├── app/
├── features/
│ ├── auth/
│ ├── dashboard/
│ ├── analytics/
│ └── users/
├── components/
├── hooks/
├── services/
├── store/
├── mock/
└── utils/
