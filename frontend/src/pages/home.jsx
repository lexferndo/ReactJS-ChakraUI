/* eslint-disable no-unused-vars */
import {
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  Image,
  Divider,
  ButtonGroup,
  CardFooter,
  Button,
  Stack,
  Center,
  Spinner,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { deleteBook, listBook } from "../modules/fetch/book";
import CreateBook from "../components/createbook";
// import UpdateBook from "../components/updatebook";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await listBook();
      setBooks(response.books);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <>
        <Text fontSize="5xl" align="center">
          Loading.....
        </Text>
        <Center>
          <Spinner size="xl" />
        </Center>
      </>
    );
  }

  return (
    <>
      <Container maxW="2xl" centerContent marginBottom={10} marginTop={5}>
        <Heading>Our Book</Heading>
        <Text>
          Add Your Book{" "}
          <Link color="teal.500" href="#">
            <CreateBook />
          </Link>
        </Text>
      </Container>

      <Container maxW="full">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {books.map((book, index) => {
            return (
              <Card maxW="md" key={index}>
                <CardBody>
                  <Image
                    src={`http://localhost:8000/${book.image}`}
                    alt="image file"
                    boxSize="250px"
                    objectFit="fill"
                  ></Image>
                  <Stack mt="6" spacing="3">
                    <Heading size="lg">{book.title}</Heading>
                    <Text fontSize="sm">Pengarang : {book.author}</Text>
                    <Text fontSize="sm">Penerbit: {book.publisher}</Text>
                    <Text fontSize="sm">Tahun Terbit : {book.year}</Text>
                    <Text fontSize="sm">Jumlah Halaman : {book.pages}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="red"
                      onClick={(e) => handleDeleteBook(book.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
