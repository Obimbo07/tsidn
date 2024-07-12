'use_client';
import Link from "next/link";

export default function Mission(){
    return( 
        <>
            <h2 className="font-bold text-2xl text-center">Our Mission</h2>
              <div className="font-sans p-2">
                <p className="p-4 text-start text-lg">
                    At TranSafety Development Network, our mission is to empower road transport safety and development in Kenya. 
                    We are dedicated to fostering collaboration among key stakeholders at national, regional, and international levels to enhance the safety and development of the transport sector. Our primary goal is to ensure the well-being of communities, facilitate the efficient movement of goods and services, and contribute to the overall growth of Kenya’s economy.
                </p>
                <p className="text-start font-bold">
                    TSDN achieves its mission through:
                </p>
                <ul className="list-disc list-image">
                  <li>
                    <Link href={'/'}>
                      Expert knowledge sharing sessions
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'}> 
                      Training programs
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'}>
                      Hosting national and regional road transport and safety technical seminars and confrences
                    </Link>
                  </li>
                </ul>
                <p className="text-lg">
                    With your support, we aim to lead in the exchange of knowledge regarding safe and sustainable road transport and safety policy and practice, ensuring a safer, more sustainable future for road transport in Kenya.
                </p>
                <h2 className="font-bold text-2xl text-center">Terms of Reference (TOR)</h2>
                <p className="p-2">
                    To learn more about our organization's Terms of Reference (TOR), you can download the PDF document by clicking the link below:
                </p>
                <Link href="/path-to-your-pdf-file/TOR.pdf" className="bg-blue-500 mb-4 p-2 rounded-full text-white" download="TOR.pdf">Download TOR PDF</Link>
              </div>            
        </>
    );
}