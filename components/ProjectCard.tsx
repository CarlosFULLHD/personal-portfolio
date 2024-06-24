import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  technologies: string[];
  carouselImages: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  shortDescription,
  fullDescription,
  keyPoints,
  technologies,
  carouselImages,
  githubLink,
  demoLink,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openImageModal = (img: string) => {
    setSelectedImage(img);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage("");
    setImageModalOpen(false);
  };

  return (
    <div>
      <Card
        className="cursor-pointer w-full h-[450px]"
        isPressable
        onClick={onOpen}
      >
        <CardBody className="p-0">
          <Image
            width="100%"
            alt={title}
            className="w-full h-[250px] object-cover"
            src={image}
          />
        </CardBody>
        <CardFooter className="text-small justify-between flex flex-col py-4 z-10">
          <h1 className="text-bold text-2xl">{title}</h1>
          <p className="text-default-500">{shortDescription}</p>
          <div className="flex flex-row pb-2 lg:pb-4">
            {technologies.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                alt={tech}
                className="w-10 h-10 mx-1"
              />
            ))}
          </div>
        </CardFooter>
      </Card>

      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        className="mx-auto max-w-[1024px] p-1 sm:p-2 md:p-4 lg:p-8 rounded-lg"
        scrollBehavior="inside"
      >
        <ModalContent>
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
              <Carousel orientation="horizontal">
                <CarouselMainContainer className="h-80">
                  {carouselImages.map((img, index) => (
                    <SliderMainItem
                      key={index}
                      className="border border-muted flex items-center justify-center h-72 rounded-md"
                    >
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                        onClick={() => openImageModal(img)}
                      />
                    </SliderMainItem>
                  ))}
                </CarouselMainContainer>
                <CarouselThumbsContainer className="h-20">
                  {carouselImages.map((img, index) => (
                    <SliderThumbItem
                      key={index}
                      index={index}
                      className="rounded-md bg-transparent"
                    >
                      <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
                        <Image
                          src={img}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-md"
                          onClick={() => openImageModal(img)}
                        />
                      </span>
                    </SliderThumbItem>
                  ))}
                </CarouselThumbsContainer>
              </Carousel>
              <h2 className="text-bold text-md mt-4">Technologies:</h2>
              <div className="flex space-x-2">
                {technologies.map((tech, index) => (
                  <Image
                    key={index}
                    src={tech}
                    alt={tech}
                    className="w-10 h-10"
                  />
                ))}
              </div>
              <p>{fullDescription}</p>
              <h3 className="mt-4 mb-2 font-bold">Key Features:</h3>
              <ul className="list-disc ml-5">
                {keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button
                className="font-bold"
                color="danger"
                variant="bordered"
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                className="font-bold text-md"
                as={Link}
                href={githubLink}
                target="_blank"
                color="primary"
              >
                Github
              </Button>
              <Button
                className="font-bold text-md"
                as={Link}
                href={demoLink}
                target="_blank"
                color="primary"
              >
                Demo
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isImageModalOpen}
        onOpenChange={closeImageModal}
        size="full"
      >
        <ModalContent>
          <ModalBody className="flex justify-center items-center">
            <Image
              src={selectedImage}
              alt="Full Resolution"
              className="w-full h-full object-cover"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              className="font-bold w-20 h-10"
              color="danger"
              variant="solid"
              onClick={closeImageModal}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectCard;
