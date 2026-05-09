import os

# Files ki list
file_names = [
    "Adhyay-03.01.html", "Adhyay-03.02.html", "Adhyay-03.03.html", "Adhyay-03.04.html", "Adhyay-03.05.html",
    "Adhyay-03.06.html", "Adhyay-03.07.html", "Adhyay-03.08.html", "Adhyay-03.09.html", "Adhyay-03.10.html",
    "Adhyay-03.11.html", "Adhyay-03.12.html", "Adhyay-03.13.html", "Adhyay-04.01.html", "Adhyay-04.02.html",
    "Adhyay-04.03.html", "Adhyay-04.04.html", "Adhyay-04.05.html", "Adhyay-04.06.html", "Adhyay-04.07.html",
    "Adhyay-04.08.html", "Adhyay-04.09.html", "Adhyay-04.10.html", "Adhyay-05.01.html", "Adhyay-06.01.html",
    "Adhyay-07.01.html", "Adhyay-07.02.html", "Adhyay-07.03.html", "Adhyay-07.04.html", "Adhyay-07.05.html",
    "Adhyay-07.06.html", "Adhyay-07.07.html", "Adhyay-07.08.html", "Adhyay-07.09.html", "Adhyay-07.10.html",
    "Adhyay-07.11.html", "Adhyay-07.12.html", "Adhyay-07.13.html", "Adhyay-07.14.html", "Adhyay-07.15.html",
    "Adhyay-08.01.html", "Adhyay-08.02.html", "Adhyay-08.03.html", "Adhyay-08.04.html", "Adhyay-08.05.html",
    "Adhyay-08.06.html", "Adhyay-08.07.html", "Adhyay-08.08.html", "Adhyay-08.09.html", "Adhyay-08.10.html",
    "Adhyay-08.11.html", "Adhyay-08.12.html", "Adhyay-08.13.html", "Adhyay-08.14.html", "Adhyay-08.15.html",
    "Adhyay-08.16.html", "Adhyay-09.01.html", "Adhyay-09.02.html", "Adhyay-09.03.html", "Adhyay-10.01.html",
    "Adhyay-10.02.html", "Adhyay-10.03.html", "Adhyay-10.04.html", "Adhyay-10.05.html", "Adhyay-10.06.html",
    "Adhyay-10.07.html", "Adhyay-10.08.html", "Adhyay-10.09.html", "Adhyay-10.10.html", "Adhyay-10.11.html",
    "Adhyay-10.12.html", "Adhyay-10.13.html", "Adhyay-10.14.html", "Adhyay-10.15.html", "Adhyay-10.16.html",
    "Adhyay-11.01.html", "Adhyay-11.02.html", "Adhyay-11.03.html", "Adhyay-11.04.html", "Adhyay-11.05.html",
    "Adhyay-12.01.html", "Adhyay-13.01.html", "Adhyay-13.02.html", "Adhyay-13.03.html", "Adhyay-13.04.html",
    "Adhyay-13.05.html", "Adhyay-13.06.html", "Adhyay-13.07.html", "Adhyay-13.08.html", "Adhyay-13.09.html",
    "Adhyay-13.10.html", "Adhyay-13.11.html", "Adhyay-13.12.html", "Adhyay-13.13.html", "Adhyay-13.14.html",
    "Adhyay-13.15.html", "Adhyay-13.16.html", "Adhyay-13.17.html", "Adhyay-13.18.html", "Adhyay-13.19.html",
    "Adhyay-13.20.html", "Adhyay-13.21.html", "Adhyay-13.22.html", "Adhyay-13.23.html", "Adhyay-13.24.html",
    "Adhyay-13.25.html", "Adhyay-13.26.html", "Adhyay-13.27.html", "Adhyay-13.28.html", "Adhyay-13.29.html",
    "Adhyay-13.30.html", "Adhyay-13.31.html", "Adhyay-13.32.html", "Adhyay-13.33.html", "Adhyay-13.34.html",
    "Adhyay-13.35.html", "Adhyay-13.36.html", "Adhyay-13.37.html", "Adhyay-13.38.html", "Adhyay-13.39.html",
    "Adhyay-13.40.html", "Adhyay-13.41.html", "Adhyay-13.42.html", "Adhyay-13.43.html", "Adhyay-13.44.html",
    "Adhyay-13.45.html", "Adhyay-13.46.html", "Adhyay-13.47.html", "Adhyay-13.48.html", "Adhyay-13.49.html",
    "Adhyay-13.50.html", "Adhyay-13.51.html", "Adhyay-13.52.html", "Adhyay-13.53.html", "Adhyay-13.54.html",
    "Adhyay-13.55.html", "Adhyay-13.56.html", "Adhyay-13.57.html", "Adhyay-13.58.html", "Adhyay-13.59.html",
    "Adhyay-13.60.html", "Adhyay-13.61.html", "Adhyay-13.62.html", "Adhyay-13.63.html", "Adhyay-13.64.html",
    "Adhyay-13.65.html", "Adhyay-13.66.html", "Adhyay-13.67.html", "Adhyay-13.68.html", "Adhyay-13.69.html",
    "Adhyay-13.70.html", "Adhyay-13.71.html", "Adhyay-13.72.html", "Adhyay-13.73.html", "Adhyay-13.74.html",
    "Adhyay-13.75.html", "Adhyay-13.76.html", "Adhyay-13.77.html", "Adhyay-13.78.html", "Adhyay-13.79.html",
    "Adhyay-13.80.html", "Adhyay-13.81.html", "Adhyay-13.82.html", "Adhyay-13.83.html", "Adhyay-13.84.html",
    "Adhyay-13.85.html", "Adhyay-13.86.html", "Adhyay-13.87.html", "Adhyay-13.88.html", "Adhyay-13.89.html",
    "Adhyay-14.01.html", "Adhyay-14.02.html", "Adhyay-14.03.html", "Adhyay-15.01.html", "Adhyay-15.02.html",
    "Adhyay-15.03.html", "Adhyay-15.04.html", "Adhyay-15.05.html", "Adhyay-15.06.html", "Adhyay-15.07.html",
    "Adhyay-15.08.html", "Adhyay-15.09.html", "Adhyay-15.10.html", "Adhyay-15.11.html", "Adhyay-15.12.html",
    "Adhyay-15.13.html", "Adhyay-15.14.html", "Adhyay-15.15.html", "Adhyay-15.16.html", "Adhyay-15.17.html",
    "Adhyay-15.18.html", "Adhyay-15.19.html", "Adhyay-15.20.html", "Adhyay-15.21.html", "Adhyay-15.22.html",
    "Adhyay-15.23.html", "Adhyay-15.24.html", "Adhyay-15.25.html", "Adhyay-15.26.html", "Adhyay-15.27.html"
]

# Files create karne ka loop
for name in file_names:
    try:
        # 'w' mode file create karta hai agar wo exist nahi karti
        with open(name, 'w', encoding='utf-8') as f:
            pass  # Empty file rakhne ke liye
        print(f"Created: {name}")
    except Exception as e:
        print(f"Error creating {name}: {e}")

print("\nSabhi files kamyabi se create ho gayi hain!")