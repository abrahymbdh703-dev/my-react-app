import React, { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("تم إرسال رسالتك بنجاح ✅");

    e.target.reset();

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* Navbar */}

      <header className="navbar">

        <h1 className="logo">
          BRIACT
        </h1>

        <nav>
          <a href="#home">الرئيسية</a>
          <a href="#services">الخدمات</a>
          <a href="#about">من نحن</a>
          <a href="#projects">الأعمال</a>
          <a href="#contact">تواصل</a>
        </nav>

      </header>

      {/* Hero */}

      <section className="hero" id="home">

        <div className="overlay"></div>

        <div className="hero-content">

          <span className="welcome">
            WELCOME TO BRIACT
          </span>

          <h2>
            شركة برمجيات تبني
            <span> حلول رقمية احترافية</span>
          </h2>

          <p>
            نصمم مواقع إلكترونية حديثة وتطبيقات سريعة
            باستخدام React و JavaScript بأحدث التقنيات.
          </p>

          <div className="hero-buttons">

  <a href="#projects">
    <button className="main-btn">
      ابدأ مشروعك
    </button>
  </a>

  <a href="#services">
    <button className="second-btn">
      خدماتنا
    </button>
  </a>

</div>

        </div>

      </section>

      {/* Services */}

      <section className="services" id="services">

        <h2 className="section-title">
          خدماتنا
        </h2>

        <div className="cards">

          <div className="card">
            <div className="icon">💻</div>

            <h3>تطوير مواقع</h3>

            <p>
              تصميم مواقع احترافية متجاوبة
              وسريعة لجميع الأجهزة.
            </p>
          </div>

          <div className="card">
            <div className="icon">⚛️</div>

            <h3>تطبيقات React</h3>

            <p>
              بناء تطبيقات حديثة
              بأداء عالى وسرعة ممتازة.
            </p>
          </div>

          <div className="card">
            <div className="icon">📱</div>

            <h3>تطبيقات موبايل</h3>

            <p>
              إنشاء تطبيقات سهلة
              وعصرية للموبايل.
            </p>
          </div>

        </div>

      </section>

      {/* About */}

      <section className="about" id="about">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Briact"
          />

        </div>

        <div className="about-text">

          <h2>
            لماذا BRIACT ؟
          </h2>

          <p>
            لأننا نقدم أفضل الحلول الرقمية
            بأحدث التقنيات مع تصميمات عصرية
            وتجربة مستخدم قوية وأداء سريع.
          </p>

          <div className="stats">

            <div className="stat-box">
              <h3>150+</h3>
              <span>مشروع</span>
            </div>

            <div className="stat-box">
              <h3>98%</h3>
              <span>رضا العملاء</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>دعم فنى</span>
            </div>

          </div>

        </div>

      </section>

      {/* Projects */}

      <section className="projects" id="projects">

        <h2 className="section-title">
          أعمالنا
        </h2>

        <div className="project-container">

          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt=""
            />

            <div className="project-content">
              <h3>موقع شركة</h3>

              <p>
                تصميم موقع احترافى متكامل
                لشركة تقنية حديثة.
              </p>
            </div>

          </div>

          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
              alt=""
            />

            <div className="project-content">
              <h3>تطبيق موبايل</h3>

              <p>
                تطوير تطبيق سريع وعصرى
                بواجهة مستخدم مميزة.
              </p>
            </div>

          </div>

          <div className="project-card">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
            />

            <div className="project-content">
              <h3>لوحة تحكم</h3>

              <p>
                إنشاء Dashboard احترافية
                لإدارة الأنظمة بسهولة.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="contact" id="contact">

        <h2 className="section-title">
          تواصل معنا
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="الاسم"
            required
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            required
          />

          <textarea
            placeholder="اكتب رسالتك"
            required
          ></textarea>

          <button type="submit">
            إرسال الرسالة
          </button>

          {message && (
            <p className="success">
              {message}
            </p>
          )}

        </form>

      </section>

      {/* Footer */}

      <footer>

        <h2>
          BRIACT
        </h2>

        <p>
          © 2026 جميع الحقوق محفوظة
        </p>

      </footer>

      {/* Scroll Button */}

      {showButton && (
        <button
          className="scroll-btn"
          onClick={scrollTop}
        >
          ↑
        </button>
      )}

      {/* CSS */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial;
          scroll-behavior:smooth;
        }

        body{
          background:#020617;
          overflow-x:hidden;
        }

        .app{
          color:white;
        }

        /* Navbar */

        .navbar{
          position:fixed;
          width:100%;
          top:0;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:20px 8%;
          background:rgba(2,6,23,0.75);
          backdrop-filter:blur(12px);
          z-index:1000;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }

        .logo{
          font-size:38px;
          color:#38bdf8;
          font-weight:bold;
          letter-spacing:2px;
        }

        nav{
          display:flex;
          gap:35px;
        }

        nav a{
          text-decoration:none;
          color:white;
          font-size:18px;
          transition:0.3s;
          position:relative;
        }

        nav a::after{
          content:"";
          position:absolute;
          left:0;
          bottom:-5px;
          width:0%;
          height:2px;
          background:#38bdf8;
          transition:0.3s;
        }

        nav a:hover::after{
          width:100%;
        }

        nav a:hover{
          color:#38bdf8;
        }

        /* Hero */

        .hero{
          height:100vh;
          background:url("https://images.unsplash.com/photo-1518770660439-4636190af475")
          center/cover no-repeat;
          display:flex;
          justify-content:center;
          align-items:center;
          position:relative;
          text-align:center;
          padding:20px;
        }

        .overlay{
          position:absolute;
          width:100%;
          height:100%;
          background:linear-gradient(
            rgba(0,0,0,0.75),
            rgba(2,6,23,0.92)
          );
        }

        .hero-content{
          position:relative;
          z-index:2;
          max-width:900px;
          animation:fade 1.5s ease;
        }

        .welcome{
          color:#38bdf8;
          letter-spacing:3px;
          font-size:15px;
        }

        .hero-content h2{
          font-size:75px;
          margin:25px 0;
          line-height:1.3;
        }

        .hero-content span{
          color:#38bdf8;
        }

        .hero-content p{
          font-size:22px;
          color:#d1d5db;
          line-height:2;
        }

        .hero-buttons{
          margin-top:40px;
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .main-btn,
        .second-btn{
          padding:18px 40px;
          border:none;
          border-radius:50px;
          font-size:18px;
          cursor:pointer;
          transition:0.4s;
        }

        .main-btn{
          background:#38bdf8;
          color:white;
        }

        .main-btn:hover{
          transform:translateY(-5px);
          background:#0ea5e9;
        }

        .second-btn{
          background:transparent;
          border:2px solid #38bdf8;
          color:#38bdf8;
        }

        .second-btn:hover{
          background:#38bdf8;
          color:white;
        }

        /* Sections */

        .section-title{
          text-align:center;
          font-size:55px;
          margin-bottom:70px;
        }

        /* Services */

        .services{
          padding:120px 8%;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:30px;
        }

        .card{
          background:#0f172a;
          padding:45px 30px;
          border-radius:25px;
          text-align:center;
          transition:0.4s;
          border:1px solid rgba(255,255,255,0.08);
        }

        .card:hover{
          transform:translateY(-12px);
          border-color:#38bdf8;
          box-shadow:0 15px 40px rgba(56,189,248,0.2);
        }

        .icon{
          font-size:60px;
          margin-bottom:20px;
        }

        .card h3{
          font-size:30px;
          margin-bottom:20px;
        }

        .card p{
          color:#cbd5e1;
          line-height:2;
        }

        /* About */

        .about{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:60px;
          flex-wrap:wrap;
          padding:120px 8%;
          background:#0f172a;
        }

        .about-image img{
          width:450px;
          border-radius:25px;
          box-shadow:0 20px 50px rgba(0,0,0,0.5);
        }

        .about-text{
          max-width:600px;
        }

        .about-text h2{
          font-size:55px;
          margin-bottom:25px;
        }

        .about-text p{
          font-size:20px;
          line-height:2;
          color:#cbd5e1;
        }

        .stats{
          display:flex;
          gap:20px;
          margin-top:40px;
          flex-wrap:wrap;
        }

        .stat-box{
          background:#111827;
          padding:25px;
          border-radius:18px;
          min-width:150px;
          text-align:center;
        }

        .stat-box h3{
          color:#38bdf8;
          font-size:35px;
        }

        .stat-box span{
          color:#cbd5e1;
        }

        /* Projects */

        .projects{
          padding:120px 8%;
        }

        .project-container{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:30px;
        }

        .project-card{
          background:#0f172a;
          border-radius:25px;
          overflow:hidden;
          transition:0.4s;
        }

        .project-card:hover{
          transform:translateY(-10px);
        }

        .project-card img{
          width:100%;
          height:250px;
          object-fit:cover;
        }

        .project-content{
          padding:25px;
        }

        .project-content h3{
          margin-bottom:15px;
          font-size:28px;
        }

        .project-content p{
          color:#cbd5e1;
          line-height:1.8;
        }

        /* Contact */

        .contact{
          padding:120px 8%;
        }

        form{
          max-width:700px;
          margin:auto;
          display:flex;
          flex-direction:column;
          gap:22px;
        }

        input,
        textarea{
          padding:20px;
          border:none;
          border-radius:16px;
          background:#111827;
          color:white;
          font-size:17px;
          outline:none;
          transition:0.3s;
        }

        input:focus,
        textarea:focus{
          border:1px solid #38bdf8;
          box-shadow:0 0 15px rgba(56,189,248,0.2);
        }

        textarea{
          min-height:180px;
          resize:none;
        }

        form button{
          padding:20px;
          border:none;
          border-radius:16px;
          background:#38bdf8;
          color:white;
          font-size:20px;
          cursor:pointer;
          transition:0.4s;
        }

        form button:hover{
          background:#0ea5e9;
          transform:translateY(-4px);
        }

        .success{
          text-align:center;
          color:#22c55e;
          font-size:18px;
        }

        /* Footer */

        footer{
          padding:40px;
          text-align:center;
          background:#0f172a;
          border-top:1px solid rgba(255,255,255,0.08);
        }

        footer h2{
          color:#38bdf8;
          font-size:35px;
          margin-bottom:10px;
        }

        footer p{
          color:#94a3b8;
        }

        /* Scroll */

        .scroll-btn{
          position:fixed;
          bottom:30px;
          right:30px;
          width:55px;
          height:55px;
          border:none;
          border-radius:50%;
          background:#38bdf8;
          color:white;
          font-size:24px;
          cursor:pointer;
          transition:0.3s;
          z-index:1000;
        }

        .scroll-btn:hover{
          transform:scale(1.1);
          background:#0ea5e9;
        }

        @keyframes fade{
          from{
            opacity:0;
            transform:translateY(50px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        /* Responsive */

        @media(max-width:768px){

          nav{
            display:none;
          }

          .hero-content h2{
            font-size:45px;
          }

          .hero-content p{
            font-size:18px;
          }

          .section-title{
            font-size:40px;
          }

          .about-image img{
            width:100%;
          }

        }

      `}</style>

    </div>
  );
}