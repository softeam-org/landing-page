import { StaticImageData } from "next/image";

import image1 from "../../public/image1.png";
import image2 from "../../public/image2.png";
import image3 from "../../public/image3.png";

export interface Service {
  id: number;
  serviceTitle: string;
  serviceDescription: string;
  serviceCardImage: StaticImageData;
  servicePopupImage: StaticImageData;
}

export const servicesList: Service[] = [
  {
    id: 0,
    serviceTitle: "Sites",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur saepe sequi, neque repellendusqui, vitae tempore molestias explicabo architecto, voluptate aut ut animi dicta quae est maxime libero porro?",
    serviceCardImage: image1,
    servicePopupImage: image1,
  },
  {
    id: 1,
    serviceTitle: "Sites",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur saepe sequi, neque repellendusqui, vitae tempore molestias explicabo architecto, voluptate aut ut animi dicta quae est maxime libero porro?",
    serviceCardImage: image2,
    servicePopupImage: image2,
  },
  {
    id: 2,
    serviceTitle: "Sites",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur saepe sequi, neque repellendusqui, vitae tempore molestias explicabo architecto, voluptate aut ut animi dicta quae est maxime libero porro?",
    serviceCardImage: image3,
    servicePopupImage: image3,
  },
];
