import Layout from "@/components/layout/Layout";
import Container from "@/components/layout/Container";
const Contact: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="my-24 flex mx-12 shadow-2xl p-6 gap-8">
          <div className="flex flex-col">
            <div className="contact">
              <img src="images/BFI-logo.png" alt="" className="bg-light w-48" />
              <h1 className="text-4xl font-semibold shadow-xl pl-4">Bright Future International Private Limited</h1>
            </div>
            <p className="text-lg mt-6 leading-6">
              If you need our help with anything, have questions or experiencing
              any technical difficulties, please dont hesitate to write to us.
              Our support team will get back to you shortly.
            </p>
            <div className="contact">
              <img src="images/location.svg" alt="" className="w-6" />
              Sahabhagita Marga, Ward No. 10, Mid-Baneshwor, Kathmandu, Nepal
            </div>
            <div className="contact">
              <img src="images/phone.svg" alt="" className="w-6" />
              +977 01 5172078, 9851097330, 9841810068
            </div>
            <div className="contact">
              <img src="images/Email.svg" alt="" className="w-6" />
              <a
                href="mailto:	bf.international2012@gmail.com"
                className="hover:underline text-primary"
              >
                bf.international2012@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full">
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bright%20Future%20Int%C2%B4l%20Pvt.%20Ltd.,%20Kathmandu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default Contact;
