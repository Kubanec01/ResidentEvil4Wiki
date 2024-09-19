import image1 from "../../../assets/image1.jpg";
import logo from "../../../assets/logo.png";
import { motion } from "framer-motion";

export function Image() {
  return (
    <div>
      <div className="relative">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-[62.5rem] xl:h-[68.75rem] w-full object-cover"
          src={image1}
          alt="image1"
        />
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-[40%] xl:top-[60%] left-[7%] xl:left-[2%] w-[85%] xl:w-[60%] max-w-[1100px] object-cover"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
}

