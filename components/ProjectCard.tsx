import React from "react";
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
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
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

  return (
    <div>
      <Card
        className="cursor-pointer w-full h-[450px]"
        isPressable
        onClick={onOpen}
      >
        <CardBody className="p-0 overflow-hidden">
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
            <ModalHeader className="text-3xl text-yellow-dark">
              {title}
            </ModalHeader>
            <ModalBody>
              <Carousel>
                <CarouselNext />
                <CarouselPrevious />
                <div className="relative">
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
                        />
                      </SliderMainItem>
                    ))}
                  </CarouselMainContainer>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <div className="flex space-x-1">
                      {carouselImages.map((_, index) => (
                        <CarouselIndicator key={index} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </Carousel>
              <h2 className="text-bold text-md text-xl lg:text-3xl mt-4">
                Technologies:
              </h2>
              <div className="flex space-x-2">
                {technologies.map((tech, index) => (
                  <Image
                    key={index}
                    src={tech}
                    alt={tech}
                    className="w-30 h-30"
                  />
                ))}
              </div>
              <p className="text-xl">{fullDescription}</p>
              <h3 className="mt-4 mb-2 font-bold text-xl lg:text-3xl">
                Key Features:
              </h3>
              <ul className="list-disc ml-5 text-xl lg:text-2xl">
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
              {/* <Button
                className="font-bold text-md"
                as={Link}
                href={demoLink}
                target="_blank"
                color="primary"
              >
                Demo
              </Button> */}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectCard;
