# NavigationAndDeepLinkingEx

# Project Setup Instructions

## Prerequisites

- Node.js and npm installed  
- a physical device connected via USB or wireless debugging (or Android Studio and emulator setup)

## Steps to Build and Run the Project

1. **Clone the repository**  
   *(Ensure the clone path is as short as possible to avoid long file path issues)*

   ```bash
   git clone [your-repo-link]

2. **Connect to a device or emulator**  
   - Connect a physical Android device via USB or set up wireless debugging using `adb`.  
   - Alternatively, use an Android emulator.

4.  **Install project dependencies**
     ```bash
     npm install
     
5.  **Build and run the project**
     ```bash
     npx react-native run-android

## Deep Link Command
To trigger the app with a deep link, use:
```bash
npx uri-scheme open navigationanddeeplinkex://settings/setcompanyid --android
