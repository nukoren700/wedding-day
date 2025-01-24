export default function LocationPage() {
  return (
    <div className="flex flex-col items-center pt-20 px-4">
      <h1 className="text-2xl font-bold mb-4">Our Location</h1>
      <div className="w-full max-w-4xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7559022710193!2d104.02904327515039!3d16.7390269840418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313d1c6a84e900e7%3A0x8ce51063bf4b8e1c!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Lia4LmJ4Liy4LiZ4LiZ4Liy4LiB4Lij4Liw4LmA4LiU4Liy!5e0!3m2!1sth!2sth!4v1737616424622!5m2!1sth!2sth"
          allowFullScreen={true}
          loading="lazy"
          className="w-full h-64 md:h-96 border-2 border-pink rounded-md"
        ></iframe>
      </div>
      <p className="mt-4 text-center text-lg">Find us on Google Maps!</p>
    </div>
  );
}
