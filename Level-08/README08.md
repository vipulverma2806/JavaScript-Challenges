# 🎯 **Level 8 – String Problems**

### 🧩 **Core Concept Focus**

- String traversal
- Frequency counting
- Manual substring searching
- String transformation logic
- Character classification
- Avoiding built-ins where needed (for skill building)

---

### **82 Reverse a String (Manual Method Only)**

- **Input:** `"javascript"`
- **Output:** `"tpircsavaj"`
  ✨ _Use a loop — no `.reverse()`._

---

### **83 Check if a String is a Palindrome**

- **Input:** `"racecar"`
- **Output:** `Palindrome`
  ✨ _Compare characters from both ends using two-pointer logic._

---

### **84 Count Frequency of Each Character**

- **Input:** `"banana"`
- **Output:** `{ b:1, a:3, n:2 }`
  ✨ _Teaches hash maps / JS objects + iteration._

---

### **85 Find the Most Frequent Character in a String**

- **Input:** `"success"`
- **Output:** `Most frequent: s (3 times)`
  ✨ _Builds on frequency map — find maximum occurrence._

---

### **86 Check if Two Strings Are Anagrams (Without Sorting)**

- **Input:** `"listen"`, `"silent"`
- **Output:** `Anagram`
  ✨ _Use character frequency comparison — no `.sort()`._

---

### **87 Find the First Non-Repeating Character**

- **Input:** `"aabbcddeff"`
- **Output:** `c`
  ✨ _Requires 2-pass algorithm:
  first count → then find first unique._

---

### **88 Remove All Duplicate Characters (Keep First Occurrence)**

- **Input:** `"programming"`
- **Output:** `"progamin"`
  ✨ _Use a visited set + build new string._

---

### **89 Check if a String Contains Only Alphabets (No Regex)**

- **Input:** `"HelloWorld123"`
- **Output:** `False`
  ✨ _Use ASCII ranges manually._

---

### **90 Reverse Only the Words in a Sentence**

- **Input:** `"I love coding"`
- **Output:** `"coding love I"`
  ✨ _Split manually or build reverser yourself._

---

### **91 Find the Longest Word in a Sentence**

- **Input:** `"coding is beautiful"`
- **Output:** `"beautiful"`
  ✨ _Manual scanning + longest tracking._

---

### **92 Count the Number of Words (Manually Without split)**

- **Input:** `"  hi   there  world "`
- **Output:** `3 words`
  ✨ _Detect transitions from space → non-space using logic._

---

### **93 Find All Substrings of a String (No Built-ins)**

- **Input:** `"abc"`
- **Output:** `a, ab, abc, b, bc, c`
  ✨ _Nested loops + substring construction._

---

### **94 Compress a String (Basic Run-Length Encoding)**

- **Input:** `"aaabbccccd"`
- **Output:** `"a3b2c4d1"`
  ✨ _Count consecutive characters and build encoded output._
