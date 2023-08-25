import Layout from "@/components/layout/Layout";
const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="w-full mt-24">
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bright%20Future%20Int%C2%B4l%20Pvt.%20Ltd.,%20Kathmandu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Find Population on Map</a>
        </iframe>
      </div>
    </Layout>
  );
};
export default Contact;
