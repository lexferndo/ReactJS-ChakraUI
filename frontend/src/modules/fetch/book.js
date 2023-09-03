import instance from "../axios/index";

export const listBook = async () => {
  try {
    const response = await instance.get("/books");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async (params) => {
  try {
    const response = await instance.post("/books", params, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (id, title, author, publisher, year, pages) => {
  try {
    const response = await instance.put(`/books/${id}`, {
      title,
      author,
      publisher,
      year,
      pages,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (id) => {
  try {
    const response = await instance.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
