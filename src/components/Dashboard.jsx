import "./Dashboard.css";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.user);

  const services = [
    {
      id: 1,
      title: "Logo Design",
      seller: "John Doe",
      price: "$50",
      rating: 4.9,
      //add image
    },
    {
      id: 2,
      title: "Website Development",
      seller: "Jane Smith",
      price: "$200",
      rating: 4.7,
      //   image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "SEO Optimization",
      seller: "Alex Brown",
      price: "$100",
      rating: 4.8,
      //   image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Social Manager",
      seller: "Cait Perl",
      price: "$60",
      rating: 4.7,
      //add image
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Welcome to Freelancehub, {user.email}!</h1>
        <p>Find top freelancers for your project.</p>

        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* eikona */}
              <h3>{service.title}</h3>
              <p>By {service.seller}</p>
              <p>{service.price}</p>
              <p>⭐ {service.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
