import Container from "./layout/Container";
const Footer = () => {
  return (
    <div className="h-[400px] w-[100%] bg-primary text-black">
      <Container>
        <div className="ml-14 flex flex-col">
          <img src="/images/BFI-logo.png" alt="" className="w-[100px] bg-light"/>
          <h3 className="font-semibold text-lg">
            Bright Future International Private Limited
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <p className="icons">
              <img src="images/location.svg" alt="" className="w-[25px]" />
              Sahabhagita Marga, Ward No. 10, Mid-Baneshwor, Kathmandu, Nepal
            </p>
            <p className="icons">
              <img src="images/phone.svg" alt="" className="w-[25px]" />
              +977 01 5172078, 9851097330, 9841810068
            </p>
            <p className="icons">
              <img src="images/Email.svg" alt="" className="w-[25px]" />
              <a
                href="mailto:	bf.international2012@gmail.com" 
                className="hover:underline text-primary"
              >
                bf.international2012@gmail.com
              </a>
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <img src="/images/facebook.svg" alt="" className="w-[30px]" />
            <img src="/images/instagram.svg" alt="" className="w-[30px]" />
            <img src="/images/twitter.svg" alt="" className="w-[30px]" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
