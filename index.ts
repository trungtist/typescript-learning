// 🧠 Bài 1: Kiểu cơ bản
// Viết hàm nhận vào 2 tham số: name (kiểu string) và age (kiểu number), trả về chuỗi dạng:
// "Name is Trang, age is 25"

console.log("===== Bài 1: =====");
function getInfo(name: string, age: number) {
    return `Name is ${name}, age is ${age}`;
}

console.log(getInfo("Trung", 24));

// 🧠 Bài 2: Interface & Object
// Tạo interface User gồm các thuộc tính:
// id: số
// name: chuỗi
// isAdmin: boolean

// Viết hàm printUserInfo(user: User) để in ra thông tin người dùng như sau:
// tsSao chépChỉnh sửaID: 1
// Name: Trang
// Is Admin: true

console.log("===== Bài 2: =====");
interface User {
    id: number;
    name: string;
    isAdmin: boolean;
}

function printUserInfo(user: User) {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Is Admin: ${user.isAdmin}`);   
}

printUserInfo({ id: 1, name: "Trung", isAdmin: true });

// 🧠 Bài 3: Union & Type Alias
// Khai báo type tên là Status với giá trị "pending" | "success" | "error".
// Viết hàm handleStatus(status: Status) in ra:

// "Loading..." nếu là pending
// "Done!" nếu là success
// "Failed!" nếu là error

console.log("===== Bài 3: =====");
type Status = "pending" | "success" | "error";
function handleStatus(status: Status) {
    if (status === "pending") {
        console.log("Loading...");
    } else if (status === "success") {
        console.log("Done!");
    } else {
        console.log("Failed!");
    }
}

handleStatus('error')

// 🧠 Bài 4: Class & Constructor
// Viết một class Rectangle có:

// 2 thuộc tính: width, height (number)
// Constructor để khởi tạo 2 thuộc tính
// Phương thức getArea() trả về diện tích

console.log("===== Bài 4: =====");
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());

// 🧠 Bài 5: Generic Function
// Viết một hàm generic wrapInArray<T>(value: T): T[] để đưa bất kỳ giá trị nào vào một mảng.
// Ví dụ:

// tsSao chépChỉnh sửawrapInArray(5);         // [5]
// wrapInArray("hello");   // ["hello"]
// wrapInArray({ x: 1 });  // [{ x: 1 }]

console.log("===== Bài 5: =====");
function wrapInArray<T>(value: T): T[] {
    return [value];
}
console.log(wrapInArray(5));

// 🧠 Bài 6: Enum
// Tạo enum tên là Direction với các giá trị: Up, Down, Left, Right.
// Viết hàm move(direction: Direction) in ra:

// tsSao chépChỉnh sửaMoving Up...
// Moving Down...
// ...

// enum (viết tắt của enumeration) là một kiểu dữ liệu cho phép bạn định nghĩa tập hợp các hằng số có tên.

console.log("===== Bài 6: =====");
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction) {
    if (direction === Direction.Up) {
        console.log("Moving Up...");
    } else if (direction === Direction.Down) {
        console.log("Moving Down...");
    } else if (direction === Direction.Left) {
        console.log("Moving Left...");
    } else {
        console.log("Moving Right...");
    }
}

move(Direction.Up);

// 🧠 Bài 7: Tuple & Array Destructuring
// Viết hàm getUserInfo() trả về tuple gồm: tên (string), tuổi (number), đã xác thực (boolean).
// Sau đó gọi hàm và dùng destructuring để in ra từng giá trị.

// tsSao chépChỉnh sửaconst [name, age, verified] = getUserInfo();

console.log("===== Bài 7: =====");
function getUserInfo(): [string, number, boolean] {
    return ["Trung", 24, true];
}

const [username, age, verified] = getUserInfo();
console.log(username, age, verified);

// 🧠 Bài 8: Optional & Default Params
// Viết hàm greet(name: string, greeting?: string).
// Nếu greeting không được truyền vào, mặc định là "Hello".
// Ví dụ:

// tsSao chépChỉnh sửagreet("Trang"); // Hello, Trang
// greet("Trang", "Hi"); // Hi, Trang

console.log("===== Bài 8: =====");
function greet(username: string, greeting?: string) {
    const greetingMessage = greeting || "Hello";
    console.log(`${greetingMessage}, ${username}`);
}

greet("Trang");
greet("Trang", "Hi");

// 🧠 Bài 9: Readonly & Immutability
// Tạo interface Config có các thuộc tính:

// tsSao chépChỉnh sửa{
//   apiKey: string;
//   baseUrl: string;

console.log("===== Bài 9: =====");
interface Config {
    readonly apiKey: string;
    readonly baseUrl: string;
}

const config: Config = {
    apiKey: "1234567890",
    baseUrl: "https://api.example.com",
}

console.log(config);

// 🧠 Bài 10: Intersection Type
// Tạo 2 interface:

// tsSao chépChỉnh sửainterface Person {
//   name: string;
// }

// interface Employee {
//   employeeId: number;
// }
// Dùng intersection type (&) để khai báo một biến staff có cả 2 kiểu. Sau đó in ra thông tin:

// tsSao chépChỉnh sửaconst staff: Person & Employee = {
//   name: "Trang",
//   employeeId: 101,
// };

console.log("===== Bài 10: =====");
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

const staff: Person & Employee = {
    name: "Trung",
    employeeId: 1208,
}

console.log(staff);
