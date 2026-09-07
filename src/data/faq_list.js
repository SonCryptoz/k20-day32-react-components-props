export const FAQ_LIST = [
    {
        id: 1,
        question: "Props trong React dùng để làm gì?",
        answer: "Props giúp truyền dữ liệu từ component cha xuống component con và có tính chất bất biến (read-only).",
        category: "React",
        isHot: true,
    },
    {
        id: 2,
        question: "JSX là gì và tại sao cần sử dụng trong React?",
        answer: "JSX là cú pháp mở rộng của JavaScript cho phép viết mã giao diện tương tự HTML trực tiếp trong file JS, giúp code trực quan và dễ bảo trì hơn.",
        category: "JSX",
        isHot: false,
    },
    {
        id: 3,
        question: "State khác gì so với Props?",
        answer: "Props được truyền từ ngoài vào và không thể tự thay đổi, trong khi State là dữ liệu nội bộ do chính component đó quản lý và có thể cập nhật theo thời gian.",
        category: "React",
        isHot: true,
    },
    {
        id: 4,
        question:
            "Tại sao cần dùng thuộc tính 'key' khi render danh sách bằng .map()?",
        answer: "Key giúp React định danh từng phần tử, tối ưu hóa quá trình so sánh và cập nhật DOM (Reconciliation) khi dữ liệu danh sách thay đổi.",
        category: "React",
        isHot: true,
    },
    {
        id: 5,
        question:
            "Tại sao nên dùng 'list.length > 0 && ...' thay vì 'list.length && ...'?",
        answer: "Khi mảng rỗng (length = 0), biểu thức '0 && ...' sẽ trả về số 0 và render trực tiếp số 0 lên giao diện thay vì không hiển thị gì.",
        category: "JavaScript",
        isHot: false,
    },
    {
        id: 6,
        question:
            "Tại sao phải bọc hàm xử lý sự kiện trong Arrow Function khi truyền tham số?",
        answer: "Việc bọc trong arrow function như '() => handleClick(id)' giúp hàm chỉ thực thi khi sự kiện kích hoạt, tránh việc hàm bị gọi ngay lập tức lúc component render.",
        category: "React",
        isHot: false,
    },
];