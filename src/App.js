import React from "react";

const featuredProducts = [
  {
    id: 1,
    name: "Laptop Gamer XYZ",
    price: 1200,
    image:
      "https://th.bing.com/th/id/R.c11e868f644b5130a76a450156a10769?rik=vXP2h7U4ioiNRg&riu=http%3a%2f%2ftecnobits.xyz%2fwp-content%2fuploads%2f2017%2f12%2flas-mejores-laptops-gamers-2018.jpg&ehk=T%2fKIjicO2%2fVGyLQVKRuLENqlurTsthxb3aYWhLHjuBc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Procesador Intel i7 12va Gen",
    price: 350,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.kcuXXc1Uw_YEAZtelDo5fwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Monitor 27'' 4K Ultra HD",
    price: 400,
    image:
      "https://dojiw2m9tvv09.cloudfront.net/14577/product/10049-15311.jpg",
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    price: 75,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.bPl3R1qP-Agt5mcttILp1QHaEK?rs=1&pid=ImgDetMain",
  },
  {
    id: 5,
    name: "Mochila para Laptop",
    price: 60,
    image:
      "https://th.bing.com/th/id/R.08a525c6a3f009e46c7ede9a0e1b80cd?rik=civ6O8TM0g9R1A&pid=ImgRaw&r=0",
  },
];

const Home = ({ user }) => {
  const renderGreeting = () => {
    if (!user) {
      return (
        <>
          <h2>Bienvenido a TechStore</h2>
          <p>Explora nuestra amplia selección de productos tecnológicos.</p>
        </>
      );
    }

    switch (user.role) {
      case "cliente":
        return <h2>Hola, {user.name} 👋</h2>;
      case "administrador":
        return <h2>Administrador {user.name}</h2>;
      default:
        return <h2>Bienvenido a TechStore</h2>;
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>TechStore - Tu tienda de tecnología</h1>
        <nav style={styles.nav}>
          <a href="/categorias" style={styles.navLink}>Categorías</a>
          <a href="/productos" style={styles.navLink}>Productos</a>
          <a href="/carrito" style={styles.navLink}>Carrito</a>
          {user ? (
            <a href="/perfil" style={styles.navLink}>Perfil</a>
          ) : (
            <a href="/login" style={styles.navLink}>Iniciar Sesión</a>
          )}
          {user?.role === "administrador" && (
            <a href="/admin" style={{ ...styles.navLink, fontWeight: "bold" }}>Admin</a>
          )}
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.greetingSection}>{renderGreeting()}</section>

        <section style={styles.productsSection}>
          <h3>Productos Destacados</h3>
          <div style={styles.productsGrid}>
            {featuredProducts.map((prod) => (
              <div key={prod.id} style={styles.productCard}>
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={styles.productImage}
                />
                <h4>{prod.name}</h4>
                <p style={styles.price}>${prod.price.toFixed(2)}</p>
                <button
                  style={styles.primaryButton}
                  onClick={() => alert(`Agregar ${prod.name} al carrito`)}
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 TechStore - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#0d1b2a",
    padding: "20px 40px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "1rem",
  },
  main: {
    flex: 1,
    padding: "30px 40px",
  },
  greetingSection: {
    marginBottom: "30px",
  },
  productsSection: {
    marginTop: "20px",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },
  productCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#ff6600",
    marginBottom: "10px",
  },
  primaryButton: {
    backgroundColor: "#ff6600",
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  footer: {
    backgroundColor: "#0d1b2a",
    color: "#ccc",
    textAlign: "center",
    padding: "15px 0",
  },
};

export default Home;
