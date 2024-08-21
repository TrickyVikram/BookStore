
let list = [
    {
        id: 1,
        category: "Free",
        name: "Book1",
        title: "Title1",
        price: "Free",
        image: "https://images.unsplash.com/photo-1542282088-2e5013b6d4e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },]
let filterData = list.filter((data) => data.category === "Free");
            filterData.map((book) => (
                book.name
            ))
