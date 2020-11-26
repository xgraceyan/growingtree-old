# Growing Tree

A school in the cloud using ReactJS and Firebase Cloud Firestore.

## Setup

### ReactJS

This project was made with ReactJS using create-react-app and the development server included (by running `npm start`).

### Firebase

The data is held inside Firebase Cloud Firestore with a basic structure setup like this:

```
growingtree (project)

└───classes
│   │   createdAt
│   │   updatedAt
│   │   className
│   │   description
│   │   teacherFirstName
│   │   teacherLastName
│
└───users
│   │   firstName
│   │   lastName
│   │   userName
│   │   createdAt
│
└───enrollment
│   │   classId
│   │   userId
│   │   date
```

## Development

A checklist of todo's to finish in the near future for the development of this project.

- [x] Navbar/Sidebar
- [x] Dashboard UI
- [x] Authentication (Signup/Login)
- [x] Class List + Sort
- [ ] Create classes
- [ ] Enroll in classes
- [ ] Authentication Email
- [ ] Student/Teacher/Parent account types
- [ ] Class assignments
