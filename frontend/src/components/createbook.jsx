/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

import { createBook } from "../modules/fetch/book";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Link onClick={onOpen}>Here</Link>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <form
          id="form-create"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const data = {
                title: event.target.title.value,
                author: event.target.author.value,
                publisher: event.target.publisher.value,
                year: event.target.year.value,
                pages: event.target.pages.value,
                image: event.target.image.files[0],
              };

              await createBook(data);
              onClose();
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={25}>Create Book Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input name="title" type="text" placeholder="Judul Buku" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Author</FormLabel>
                <Input name="author" type="text" placeholder="Nama Pengarang" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Publisher</FormLabel>
                <Input
                  name="publisher"
                  type="text"
                  placeholder="Nama Penerbit"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Year</FormLabel>
                <Input name="year" type="number" placeholder="Tahun Terbit" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Pages</FormLabel>
                <Input
                  name="pages"
                  type="number"
                  placeholder="Jumlah Halaman"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input name="image" type="file" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                form="form-create"
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
