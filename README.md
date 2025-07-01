# 🏠 Smart Room Allocation System

🎯 A React-based web application powered by **Appwrite** backend to intelligently allocate items into **rooms based on available capacity**. The system dynamically assigns the most suitable room for a product, ensuring optimized space utilization and real-time updates.

---

## 🚀 Features

- 📦 **Dynamic room assignment** based on storage capacity  
- 🔄 **Automatic capacity update** after each allocation  
- 🧠 **Smart logic**: Higher-capacity rooms store more items  
- 📊 Live tracking of **assigned room and item details**  
- ⚙️ Powered by **Appwrite Functions** for backend automation  
- 💡 Clean and responsive UI with React & Tailwind CSS  

---

## 🖥️ Tech Stack

| Frontend        | Backend        | DB/Infra      |
|-----------------|----------------|---------------|
| React.js        | Appwrite Cloud | Appwrite DB   |
| Tailwind CSS    | Appwrite Functions | Collections & Documents |
| Zustand (optional) | Node.js (optional logic layer) | Cloud Functions |

---

## 📁 Project Structure

```
.
├── src/
│   ├── components/        # React components (RoomCard, ItemForm, etc.)
│   ├── pages/             # Page views (Dashboard, AddItem)
│   ├── utils/             # Helper functions and API logic
│   └── App.jsx            # Main application logic
├── public/
├── appwrite.json          # Appwrite project config
├── tailwind.config.js
└── README.md
```

---

## 🧠 Allocation Logic

- 🧮 Each room has a defined **capacity field**
- When an item is added:
  - System checks available rooms
  - Allocates to the **room with the highest available capacity**
  - Updates the room's capacity
  - Logs the assignment in the database

### 🔄 Example

If `Room A` has capacity 100, `Room B` has 60:
- Item of size 20 → Assigned to `Room A`
- After assignment: `Room A` → 80 left

---

## ⚙️ Setup Instructions

### ✅ Prerequisites
- Node.js ≥ 16
- Appwrite backend account (self-hosted or cloud)
- Tailwind CSS

### 🔧 Installation

```bash
git clone https://github.com/Pabitra969/roomAllocation.git
cd roomAllocation
npm install
```

### 🔗 Connect Appwrite

- Configure your `appwrite.json` and `.env` file
- Set up:
  - Rooms Collection
  - Items Collection
  - Appwrite Functions (backend allocation logic)

### ▶️ Run the App

```bash
npm run dev
```

---

## ✨ Future Enhancements

- [ ] Add drag-and-drop support for room-item visualization  
- [ ] Role-based login (Admin/User)  
- [ ] Notifications for low-capacity alerts  
- [ ] Export reports of room usage

---

## 📜 License

This project is open-source under the **MIT License**.

---

## 👨‍💻 Author

**Pabitra Kumar Ghorai**  
🔗 [GitHub](https://github.com/Pabitra969)  
🔗 [LinkedIn](https://www.linkedin.com/in/pabitra-ghorai)

---

## 🙏 Acknowledgements

- Appwrite Docs and Discord  
- ReactJS & Tailwind CSS Community  
- Project guided by room optimization use-cases in logistics & inventory systems
