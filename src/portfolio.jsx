import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X, ExternalLink, Code, Database, Smartphone, ChevronRight, ArrowRight, ShoppingCart, Globe, CheckCircle, Phone, Users, MessageCircle, Star, Network } from 'lucide-react';

// ── Minimal Professional Color Scheme
const C = {
  bg: '#FAFBFC',
  bgAlt: '#FFFFFF',
  border: '#E1E4E8',
  borderLight: '#F0F2F5',
  text: '#24292E',
  mid: '#586069',
  light: '#6A737D',
  accent: '#2188FF',
  accentDark: '#0366D6',
  accentLight: '#EAF5FF',
  success: '#28A745',
  successLight: '#E6F9EC',
};

const Portfolio = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState('all');

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      for (const s of ['home','services','clients','work','about','experience','pricing','contact']) {
        const el = document.getElementById(s);
        if (el) { const r = el.getBoundingClientRect(); if (r.top <= 100 && r.bottom >= 100) { setActive(s); break; } }
      }
    };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActive(id); setMenuOpen(false); };

  // ── DATA
  const services = [
    { color:'#0D9E99', bg:'#F0FDFB', title:'E-commerce', points:['Product catalogs & cart','MPesa / payment gateways','Inventory & order tracking','Mobile-first design'] },
    { color:'#6366F1', bg:'#F5F3FF', title:'Business Websites & Web Apps', points:['Responsive & SEO-ready','Service booking systems','Admin dashboards','Contact & inquiry forms'] },
    {  color:'#EF4444', bg:'#FFF5F5', title:'Mobile App Development', points:['iOS & Android (Flutter)','API & payment integration','POS & inventory apps','Offline capability'] },
    // { icon: <Database size={20}/>, color:'#D97706', bg:'#FFFBEB', title:'Backend & APIs', points:['RESTful API design','JWT auth & security','MongoDB & SQL','Third-party integrations'] },
  ];

  const clients = [
    {
      title:'Allstar Tech', sub:'E-commerce · Computers & Electronics',
      color:'#0d9488', bg:'#F0FDFA', collab:'Chambu Digital', live:true,
      role:' Web Development',
      desc:'Full-stack e-commerce platform with product catalog, advanced filters, Google OAuth, wholesale pricing, and product reviews.',
      tech:['Next.js 16','TypeScript','Tailwind CSS','MongoDB','Zustand','JWT','Google OAuth'],
      highlights:['Product catalog & filtering','Google OAuth + JWT','Wholesale pricing','Product reviews','SEO optimized'],
    },
    {
      title:'Electromatt', sub:'Corporate · Electrical Products & Services',
      color:'#2563EB', bg:'#EFF6FF', collab:'Chambu Digital', live:true, url:'https://www.electromatt.co.ke/',
      role:'Web Development',
      desc:'Responsive website with product/service showcase, contact forms, and SEO optimization.',
      tech:['Next.js','TypeScript','Tailwind CSS'],
      highlights:['Product & service showcase','Contact & inquiry forms','SEO structure','Fast-loading assets'],
    },
    {
      title:'Rhino Linings', sub:'Full-stack · Service Management Platform',
      color:'#DC2626', bg:'#FFF5F5', collab:null, live:false,
      role:'Full-stack Development',
      desc:'Service management system with 3-tier role access (customer / employee / admin), real-time progress tracking, and MPesa STK push payments.',
      tech:['React 18','Vite','Tailwind','Node.js','Express','MongoDB','JWT','MPesa API'],
      highlights:['3-tier role-based access','MPesa STK push','Real-time tracking','Admin dashboard'],
    },
    {
      title:'Cobitec Brands', sub:'Corporate · Multi-brand Website',
      color:'#7C3AED', bg:'#FAF5FF', collab:null, live:false,
      role:'Full-stack Development',
      desc:'Multi-brand corporate website with service pages and B2B-focused design.',
      tech:['JavaScript','HTML5','CSS3'],
      highlights:['Multi-brand showcase','B2B design','Responsive layout'],
      github:'https://github.com/Nimmoh/cobitec-brands',
    },
    {
      title:'Kambove Enterprises',
      color:'#2563EB', bg:'#EFF6FF', live:true, url:'https://www.kambove.co.ke/',
      role:'Frontend Development',
      desc:'Scalable REST API powering business operations and data management with secure, modular architecture.',
      tech:['Node.js','Express.js','RESTful APIs'],
      highlights:['Scalable REST API','Secure endpoints','Modular architecture'],
      github:'https://github.com/Nimmoh/kambove-backend',
    },
  ];

  const projects = [
    { title:'Spearmode E-commerce', cat:'ecommerce', tag:'E-commerce', color:'#0D9E99', bg:'#F0FDFB',
      desc:'Online store for tiles & hardware with an interactive tile calculator, cart, and order tracking.',
      tech:['HTML5','CSS3','JavaScript'], 
      results:['Tile calculator','Cart & checkout','Order tracking'],
      github:'https://github.com/Nimmoh/spearmode' },
    { title:'CarWash Management', cat:'webapp', tag:'Web App', color:'#6366F1', bg:'#F5F3FF',
      desc:'Operations platform — service booking, payments, expense tracking, customer DB, and analytics.',
      tech:['React.js','JavaScript','CSS3'], results:['Booking system','Payment processing','Analytics'],
      github:'https://github.com/Nimmoh/carwash-management' },
    { title:'WebInc Corporate Site', cat:'webapp', tag:'Corporate', color:'#6366F1', bg:'#F5F3FF',
      desc:'Corporate site with Node.js backend, email automation, and SEO-optimised design.',
      tech:['Node.js','Express.js','HTML5','CSS3'], results:['Email automation','SEO optimized'],
      github:'https://webinckenyaltd.co.ke/' },
    { title:'Construction Website', cat:'webapp', tag:'Corporate', color:'#6366F1', bg:'#F5F3FF',
      desc:'Portfolio site for a construction company with project gallery and contact forms.',
      tech:['HTML5','CSS3','JavaScript'],
       results:['Project gallery','Responsive design'],
      github:'https://github.com/Nimmoh/construction-website' },
    
    
  ];

  const experience = [
    { company:'DUKAKIT', title:'Flutter Developer & Customer Support',
      points:['Built & maintained POS mobile app using Flutter','Resolved user issues and guided clients on usage','Gathered feedback to improve app functionality','Trained business owners on POS operations'] },
      
    { company:'WEBINC TECHNOLOGIES', title:'Junior Developer & Digital Marketer',
      points:['Built backend services with Node.js & Express.js','Developed & tested RESTful APIs','Implemented SEO strategies to boost digital presence','Managed digital marketing campaigns'] },
    { company:'VIEWTECH LIMITED',  title:'Junior Mobile Developer & System Support',
      points:['Built Flutter apps with full API integration','Integrated SasaPay API for digital payments','Implemented JWT auth & security','Assisted in network troubleshooting'] },
    { company:'FREELANCE',  title:'Independent Developer',
      points:['Collaborated with Chambu Digital on Electromatt & Allstar Tech','Full project cycles: scoping → development → deployment → handover','E-commerce stores, APIs, and mobile apps for Kenyan SMBs'] },
  ];

  const filteredProjects = tab === 'all' ? projects : projects.filter(p => p.cat === tab);
  const navLinks = ['services','clients','projects','about','experience','pricing','contact'];

  // Pricing packages
  const pricing = [
    {
      category: 'Landing Page / Portfolio',
      price: 'KES 15,000 - 20,000',
      duration: '3-5 days',
      features: [
        'Single page responsive design',
        'Contact form integration',
        'Basic SEO setup',
        'Mobile optimization',
        'Hosting setup assistance'
      ]
    },
    {
      category: 'Business Website',
      price: 'KES 35,000 - 60,000',
      duration: '1-2 weeks',
      features: [
        '5-10 pages (Home, About, Services, etc.)',
        'Content Management System (CMS)',
        'Contact forms & email integration',
        'SEO optimization',
        'Google Analytics setup',
        'Social media integration',
        '3 months support'
      ],
      popular: true
    },
    {
      category: 'E-commerce Platform',
      price: 'KES 50,000 - 150,000',
      duration: '3-6 weeks',
      features: [
        'Product catalog & management',
        'Shopping cart & checkout',
        'M-Pesa/Payment gateway integration',
        'Order tracking system',
        'Admin dashboard',
        'Inventory management',
        'Customer accounts',
        'Email notifications',
        '6 months support'
      ]
    },
    // {
    //   category: 'Mobile App (Flutter)',
    //   price: 'KES 100,000 - 300,000',
    //   duration: '4-8 weeks',
    //   features: [
    //     'iOS & Android apps',
    //     'Custom UI/UX design',
    //     'API integration',
    //     'Push notifications',
    //     'Offline functionality',
    //     'Payment integration',
    //     'Admin panel',
    //     'App store deployment',
    //     '6 months support'
    //   ]
    // },
    {
      category: 'Custom Web Application',
      price: 'KES 150,000+',
      duration: '6-12 weeks',
      features: [
        'Custom features & functionality',
        'Database design & setup',
        'User authentication & roles',
        'API development',
        'Third-party integrations',
        'Admin dashboard',
        'Scalable architecture',
        '12 months support'
      ]
    }
  ];

  return (
    <div style={{ fontFamily:"'Inter', sans-serif", background:C.bg, color:C.text, minHeight:'100vh', overflowX:'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        ::-webkit-scrollbar { width:8px; } 
        ::-webkit-scrollbar-track { background:#F0F2F5; }
        ::-webkit-scrollbar-thumb { background:#2188FF; border-radius:4px; }
        ::-webkit-scrollbar-thumb:hover { background:#0366D6; }
        .mono { font-family:'JetBrains Mono',monospace; }

        nav { position:fixed; top:0; left:0; right:0; z-index:100; transition:all .3s; }
        .scrolled { background:rgba(255,255,255,.98); backdrop-filter:blur(10px); border-bottom:1px solid ${C.border}; box-shadow:0 1px 3px rgba(0,0,0,.04); }
        .nb { background:none; border:none; font-size:.875rem; font-weight:500; color:${C.mid}; cursor:pointer; padding:.5rem 0; position:relative; transition:color .2s; }
        .nb::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:${C.accent}; transition:width .3s; }
        .nb:hover,.nb.on { color:${C.text}; }
        .nb:hover::after,.nb.on::after { width:100%; }

        .btn-p { background:${C.accent}; color:#fff; font-weight:600; font-size:.875rem; padding:.65rem 1.5rem; border-radius:6px; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:.5rem; text-decoration:none; transition:all .2s; }
        .btn-p:hover { background:${C.accentDark}; transform:translateY(-1px); box-shadow:0 4px 12px rgba(33,136,255,.25); }
        .btn-o { background:transparent; color:${C.text}; font-weight:500; font-size:.875rem; padding:.6rem 1.5rem; border-radius:6px; border:1px solid ${C.border}; cursor:pointer; display:inline-flex; align-items:center; gap:.5rem; text-decoration:none; transition:all .2s; }
        .btn-o:hover { border-color:${C.accent}; color:${C.accent}; }

        .sec { padding:5rem 1.5rem; }
        .sec-alt { background:${C.bgAlt}; }
        .wrap { max-width:1100px; margin:0 auto; }
        .divider { height:1px; background:${C.borderLight}; margin:3rem 0; }
        .slabel { font-family:'JetBrains Mono',monospace; font-size:.75rem; letter-spacing:.1em; color:${C.accent}; text-transform:uppercase; font-weight:600; margin-bottom:.75rem; }
        .sh { font-size:clamp(1.75rem,3vw,2.5rem); font-weight:700; color:${C.text}; margin-bottom:1rem; line-height:1.2; }

        /* Minimal list-based services */
        .svc-list { display:flex; flex-direction:column; gap:1.5rem; }
        .svc-item { padding:1.5rem 0; border-bottom:1px solid ${C.borderLight}; transition:all .2s; }
        .svc-item:last-child { border-bottom:none; }
        .svc-item:hover { padding-left:.5rem; }

        /* Clean client cards */
        .cli-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(340px,1fr)); gap:1.5rem; }
        .cli-card { background:${C.bgAlt}; border:1px solid ${C.border}; border-radius:8px; padding:1.75rem; transition:all .25s; }
        .cli-card:hover { border-color:${C.accent}; box-shadow:0 4px 12px rgba(0,0,0,.06); }

        /* Minimal project cards */
        .prj-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:1.5rem; }
        .prj-card { background:${C.bgAlt}; border:1px solid ${C.border}; border-radius:8px; padding:1.5rem; transition:all .25s; }
        .prj-card:hover { border-color:${C.accent}; box-shadow:0 4px 12px rgba(0,0,0,.06); }

        .chip { font-size:.75rem; padding:.25rem .65rem; border-radius:4px; font-weight:500; }
        .tech-chip { background:${C.borderLight}; color:${C.mid}; font-size:.75rem; padding:.3rem .65rem; border-radius:4px; }

        .pill { background:${C.borderLight}; padding:.35rem .85rem; border-radius:20px; font-size:.8rem; color:${C.mid}; transition:all .2s; display:inline-block; }
        .pill:hover { background:${C.accentLight}; color:${C.accent}; }

        .clink { display:flex; align-items:center; gap:1rem; padding:1rem; background:${C.bgAlt}; border:1px solid ${C.border}; border-radius:6px; color:${C.text}; text-decoration:none; transition:all .2s; }
        .clink:hover { border-color:${C.accent}; background:${C.accentLight}; }

        .live-dot { width:8px; height:8px; border-radius:50%; background:${C.success}; display:inline-block; animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }

        .tab-b { padding:.5rem 1.25rem; border-radius:6px; font-size:.875rem; font-weight:500; border:1px solid ${C.border}; background:${C.bgAlt}; color:${C.mid}; cursor:pointer; transition:all .2s; }
        .tab-b.on,.tab-b:hover { background:${C.accentLight}; border-color:${C.accent}; color:${C.accent}; }

        /* Clean experience timeline */
        .exp-list { display:flex; flex-direction:column; gap:2.5rem; }
        .exp-item { 
          padding:1.75rem 0 1.75rem 2rem; 
          border-left:3px solid ${C.borderLight}; 
          position:relative;
          transition: all 0.2s ease;
        }
        .exp-item:hover {
          border-left-color: ${C.accent};
        }
        .exp-item::before { 
          content:''; 
          position:absolute; 
          left:-7px; 
          top:2rem; 
          width:11px; 
          height:11px; 
          border-radius:50%; 
          background:${C.bgAlt}; 
          border:3px solid ${C.accent};
          transition: all 0.2s ease;
        }
        .exp-item:hover::before {
          transform: scale(1.2);
          box-shadow: 0 0 0 4px ${C.accentLight};
        }

        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .a0{animation:fadeUp .5s ease-out forwards}
        .a1{animation:fadeUp .5s .1s ease-out forwards;opacity:0}
        .a2{animation:fadeUp .5s .2s ease-out forwards;opacity:0}
        .a3{animation:fadeUp .5s .3s ease-out forwards;opacity:0}
        .a4{animation:fadeUp .5s .4s ease-out forwards;opacity:0}

        @media(max-width:768px){
          .dn{display:none!important} .ds{display:block!important}
          .exp-item { padding-left:1.5rem; }
          .exp-item::before { left:-6px; }
          .sec { padding:3rem 1.5rem; }
        }
        @media(min-width:769px){.ds{display:none!important}}

        /* WhatsApp & Email Floating Buttons */
        .whatsapp-float {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: #25D366;
          color: white;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          border: none;
        }
        .whatsapp-float:hover {
          background: #20BA5A;
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
        }

        .email-float {
          position: fixed;
          bottom: 90px;
          right: 25px;
          background: ${C.accent};
          color: white;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(33, 136, 255, 0.3);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          border: none;
        }
        .email-float:hover {
          background: ${C.accentDark};
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(33, 136, 255, 0.5);
        }

        @media(max-width:768px){
          .whatsapp-float, .email-float { width: 48px; height: 48px; }
          .email-float { bottom: 80px; }
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''} style={{ background: scrolled ? undefined : 'rgba(255,255,255,0)' }}>
        <div className="wrap" style={{ padding:'.85rem 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.65rem' }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="38" rx="9" fill="url(#logoGradient)"/>
              <path d="M11 25V13H13.5V20.2L19.5 13H22V25H19.5V17.8L13.5 25H11Z" fill="white" fillOpacity="0.98"/>
              <circle cx="26.5" cy="19" r="2.8" fill="white" fillOpacity="0.98"/>
              <path d="M26.5 13V15.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7"/>
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2188FF"/>
                  <stop offset="1" stopColor="#0366D6"/>
                </linearGradient>
              </defs>
            </svg>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.05rem' }}>
              <span className="mono" style={{ fontSize:'.88rem', color:C.text, fontWeight:600, lineHeight:1 }}>Joy Ndabari</span>
              <span style={{ fontSize:'.68rem', color:C.light, fontWeight:500, lineHeight:1 }}>Software Developer</span>
            </div>
          </div>
          <div className="dn" style={{ display:'flex', alignItems:'center', gap:'2rem' }}>
            {navLinks.map(l => (
              <button key={l} onClick={() => go(l)} className={`nb ${active===l?'on':''}`} style={{ textTransform:'capitalize' }}>{l === 'clients' ? 'Client Work' : l}</button>
            ))}
            {/* <a href="mailto:ndabari79@gmail.com" className="btn-p" style={{ padding:'.44rem 1.1rem', fontSize:'.78rem' }}>Hire Me</a> */}
          </div>
          <button className="ds" onClick={() => setMenuOpen(!menuOpen)} style={{ background:'none', border:'none', color:C.text, cursor:'pointer', display:'none' }}>
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background:'#fff', padding:'.5rem 1.5rem 1.25rem', borderTop:`1px solid ${C.border}` }}>
            {navLinks.map(l => (
              <button key={l} onClick={() => go(l)} style={{ display:'block', width:'100%', textAlign:'left', padding:'.65rem 0', background:'none', border:'none', borderBottom:`1px solid ${C.border}`, color:C.mid, fontSize:'.9rem', cursor:'pointer', textTransform:'capitalize' }}>
                {l === 'clients' ? 'Client Work' : l}
              </button>
            ))}
            {/* <a href="mailto:ndabari79@gmail.com" className="btn-p" style={{ marginTop:'.85rem', width:'100%', justifyContent:'center' }}>Hire Me</a> */}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ background:C.bgAlt, padding:'8rem 1.5rem 5rem', position:'relative', borderBottom:`1px solid ${C.borderLight}` }}>
        <div className="wrap">
          <div style={{ maxWidth:680 }}>
            <div className="slabel a0" style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'1.25rem' }}>
              <span className="live-dot" />Available for projects
            </div>
            <h1 className="a1" style={{ fontSize:'clamp(2.5rem,6vw,4rem)', lineHeight:1.15, marginBottom:'1.25rem', fontWeight:700, color:C.text }}>
              Building digital solutions that drive business growth
            </h1>
            <p className="a2" style={{ fontSize:'1.125rem', color:C.mid, lineHeight:1.7, maxWidth:560, marginBottom:'2rem' }}>
              Software developer & IT Enthusiast specializing in e-commerce platforms, business web applications, and mobile solutions. Based in Nairobi.
            </p>
            <div className="a3" style={{ display:'flex', gap:'.85rem', flexWrap:'wrap' }}>
              <a href="https://wa.me/254706025696?text=Hi%20Joy,%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ background:'#25D366' }}>
                <MessageCircle size={16}/>WhatsApp Me
              </a>
              <a href="mailto:ndabari79@gmail.com" className="btn-o">
                <Mail size={16}/>Email Me
              </a>
              {/* <button onClick={() => go('projects')} className="btn-o">View Projects</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sec">
        <div className="wrap">
          <div className="slabel">What I offer</div>
          <div className="sh" style={{ marginBottom:'1.25rem' }}>Services that deliver results</div>
          <div className="svc-grid">
            {services.map((s,i) => (
              <div key={i} className="svc-card">
                <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:38, height:38, borderRadius:8, background:s.bg, color:s.color, marginBottom:'.85rem' }}>{s.icon}</div>
                <div style={{ fontSize:'.92rem', fontWeight:700, color:C.text, marginBottom:'.65rem' }}>{s.title}</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'.35rem' }}>
                  {s.points.map((p,pi) => (
                    <div key={pi} style={{ display:'flex', alignItems:'center', gap:'.45rem', fontSize:'.8rem', color:C.mid }}>
                   {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CLIENT WORK */}
      <section id="clients" className="sec sec-alt">
        <div className="wrap">
          <div className="slabel">Client work & collaborations</div>
          <div className="sh" style={{ marginBottom:'.4rem' }}>Real projects, real clients</div>
          <p style={{ fontSize:'.88rem', color:C.mid, marginBottom:'1.5rem' }}>
            Delivered for businesses across Kenya including collaboration with <span style={{ color:'#0D9E99', fontWeight:600 }}>Chambu Digital</span>.
          </p>
          <div className="cli-grid">
            {clients.map((p,i) => (
              <div key={i} className="cli-card">
                <div style={{ height:3, background:p.color }} />
                <div style={{ padding:'1.1rem 1.25rem' }}>
                  {/* badges */}
                  <div style={{ display:'flex', alignItems:'center', gap:'.45rem', flexWrap:'wrap', marginBottom:'.65rem' }}>
                    {p.live && <span style={{ display:'inline-flex', alignItems:'center', gap:'.3rem', fontSize:'.66rem', color:'#059669', fontWeight:700 }}><span className="live-dot"/>LIVE</span>}
                    {p.collab && <span className="collab-b">Chambu Digital</span>}
                    <span style={{ fontSize:'.66rem', color:p.color, fontWeight:700, fontFamily:"'Space Mono',monospace", letterSpacing:'.06em', textTransform:'uppercase' }}>{p.role}</span>
                  </div>

                  <div style={{ fontWeight:700, fontSize:'1.05rem', color:C.text, marginBottom:'.15rem' }}>{p.title}</div>
                  <div style={{ fontSize:'.74rem', color:C.light, marginBottom:'.7rem', fontStyle:'italic' }}>{p.sub}</div>

                  <p style={{ fontSize:'.83rem', color:C.mid, lineHeight:1.65, marginBottom:'.8rem' }}>{p.desc}</p>

                  {/* highlights */}
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.3rem', marginBottom:'.75rem' }}>
                    {p.highlights.map((h,hi) => (
                      <span key={hi} className="chip" style={{ background:p.bg, border:`1px solid ${p.color}25`, color:p.color }}>{h}</span>
                    ))}
                  </div>

                  {/* tech */}
                  {/* <div style={{ display:'flex', flexWrap:'wrap', gap:'.28rem' }}>
                    {p.tech.map((t,ti) => <span key={ti} className="tech-chip">{t}</span>)}
                  </div> */}
                </div>

                {/* footer */}
                <div style={{ padding:'.65rem 1.25rem', borderTop:`1px solid ${C.border}`, display:'flex', gap:1, alignItems:'center' }}>
                  {p.url
                    ? <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.35rem', fontSize:'.79rem', color:'#0D9E99', textDecoration:'none', fontWeight:600 }}><Globe size={13}/>Visit Site <ExternalLink size={11}/></a>
                    : p.github
                      ? <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.35rem', fontSize:'.79rem', color:C.mid, textDecoration:'none' }}><Github size={13}/>GitHub</a>
                      : <span style={{ fontSize:'.74rem', color:C.light }}>Private / Proprietary</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="work" className="sec">
        <div className="wrap">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem', marginBottom:'1.5rem' }}>
            <div>
              <div className="slabel">Portfolio</div>
              <div className="sh" style={{ marginBottom:0 }}>Personal & practice projects</div>
            </div>
            <div style={{ display:'flex', gap:'.35rem', flexWrap:'wrap' }}>
              {[{k:'all',l:'All'},{k:'ecommerce',l:'E-commerce'},{k:'webapp',l:'Web Apps'},{k:'mobile',l:'Mobile'}].map(t => (
                <button key={t.k} onClick={() => setTab(t.k)} className={`tab-b ${tab===t.k?'on':''}`}>{t.l}</button>
              ))}
            </div>
          </div>
          <div className="prj-grid">
            {filteredProjects.map((p,i) => (
              <div key={i} className="prj-card">
                <div style={{ height:2.5, background:p.color }} />
                <div style={{ padding:'1.1rem 1.1rem 1.25rem' }}>
                  <span className="chip" style={{ background:p.bg, border:`1px solid ${p.color}28`, color:p.color, marginBottom:'.65rem', display:'inline-block' }}>{p.tag}</span>
                  <div style={{ fontWeight:700, fontSize:'.95rem', color:C.text, marginBottom:'.45rem' }}>{p.title}</div>
                  <p style={{ fontSize:'.81rem', color:C.mid, lineHeight:1.6, marginBottom:'.7rem' }}>{p.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.28rem', marginBottom:'.7rem' }}>
                    {p.results?.map((r,ri) => <span key={ri} className="chip" style={{ background:p.bg, border:`1px solid ${p.color}28`, color:p.color }}>{r}</span>)}
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'.25rem', marginBottom:'.85rem' }}>
                    {p.tech.map((t,ti) => <span key={ti} className="tech-chip">{t}</span>)}
                  </div>
                  {p.github
                    ? <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.35rem', fontSize:'.78rem', color:'#0D9E99', textDecoration:'none', fontWeight:600 }}><Github size={13}/>GitHub <ExternalLink size={11}/></a>
                    : <span style={{ fontSize:'.74rem', color:C.light }}>Private</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className="sec sec-alt">
        <div className="wrap about-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>
          <div>
            <div className="slabel">About me</div>
            <div className="sh">Developer & IT specialist, Nairobi</div>
            <p style={{ fontSize:'.88rem', color:C.mid, lineHeight:1.8, marginBottom:'.85rem' }}>
              Results-driven IT professional who bridges technical excellence with real business outcomes. I've shipped e-commerce platforms, mobile POS systems, backend APIs, and corporate websites for clients across Kenya.
            </p>
            <p style={{ fontSize:'.88rem', color:C.mid, lineHeight:1.8, marginBottom:'1.5rem' }}>
              Worked simultaneously across Dukakit, WebInc Technologies, and Viewtech — while collaborating with <span style={{ color:'#0D9E99', fontWeight:600 }}>Chambu Digital</span> on client e-commerce projects.
            </p>
            <div style={{ display:'flex', flexDirection:'column', borderTop:`1px solid ${C.border}` }}>
              {[
                ['Degree', 'BSc Information Technology — JKUAT'],
                ['Cert.', 'Mobile Software Dev — EMobilis'],
                ['Location', 'Nairobi, Kenya'],
                ['Status', 'Open to freelance & full-time roles'],
              ].map(([k,v],i) => (
                <div key={i} style={{ display:'flex', gap:'.75rem', padding:'.55rem 0', borderBottom:`1px solid ${C.border}`, fontSize:'.83rem' }}>
                  <span style={{ color:C.light, minWidth:70, fontWeight:600 }}>{k}</span>
                  <span style={{ color:C.text }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:C.light, marginBottom:'1rem' }}>Tech Stack</div>
            {[
              { label:'Frontend & Mobile', color:'#0D9E99', skills:['Next.js','React.js','Flutter','TypeScript','JavaScript','Tailwind CSS','HTML5/CSS3'] },
              { label:'Backend & Database', color:'#6366F1', skills:['Node.js','Express.js','MongoDB','SQL','RESTful APIs'] },
              { label:'Auth & Payments', color:'#EF4444', skills:['JWT','Google OAuth','MPesa API','SasaPay'] },
              { label:'Tools', color:'#D97706', skills:['Git & GitHub','Postman','Vercel','Vite'] },
            ].map((g,gi) => (
              <div key={gi} style={{ marginBottom:'1.1rem' }}>
                <div style={{ fontSize:'.72rem', color:g.color, marginBottom:'.4rem', fontWeight:700 }}>{g.label}</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'.28rem' }}>
                  {g.skills.map((s,si) => <span key={si} className="pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section id="experience" className="sec">
        <div className="wrap">
          <div className="slabel">Career</div>
          <div className="sh">Professional Experience</div>
          <div className="exp-list">
            {experience.map((e,i) => (
              <div key={i} className="exp-item">
                <div style={{ display:'flex', alignItems:'center', gap:'.6rem', marginBottom:'.85rem' }}>
                  <div style={{ width:10, height:10, borderRadius:'50%', background:e.dot, flexShrink:0 }} />
                  <span style={{ fontSize:'.85rem', fontWeight:700, color:C.text, letterSpacing:'.02em' }}>{e.company}</span>
                </div>
                <h3 style={{ fontSize:'1.125rem', fontWeight:600, color:C.text, marginBottom:'1rem', lineHeight:1.4 }}>
                  {e.title}
                </h3>
                <ul style={{ display:'flex', flexDirection:'column', gap:'.65rem', paddingLeft:0, listStyle:'none' }}>
                  {e.points.map((pt,pi) => (
                    <li key={pi} style={{ fontSize:'.9375rem', color:C.mid, lineHeight:1.65, paddingLeft:'1.25rem', position:'relative' }}>
                      <span style={{ position:'absolute', left:0, color:C.accent, fontWeight:600 }}>•</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PRICING */}
      <section id="pricing" className="sec">
        <div className="wrap">
          <div className="slabel">Investment</div>
          <div className="sh"> Pricing</div>
          <p style={{ fontSize:'1rem', color:C.mid, lineHeight:1.7, maxWidth:680, marginBottom:'3rem' }}>
             Final pricing depends on specific requirements, complexity, and timeline. All prices include initial consultation and project planning.
          </p>
          
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.5rem' }}>
            {pricing.map((pkg, i) => (
              <div 
                key={i} 
                style={{ 
                  background: pkg.popular ? C.accentLight : C.bgAlt,
                  border: `2px solid ${pkg.popular ? C.accent : C.border}`,
                  borderRadius: '8px',
                  padding: '2rem',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.accent;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(33, 136, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = pkg.popular ? C.accent : C.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: C.accent,
                    color: 'white',
                    padding: '.35rem .85rem',
                    borderRadius: '20px',
                    fontSize: '.75rem',
                    fontWeight: 600
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: C.text, marginBottom: '.75rem' }}>
                  {pkg.category}
                </h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: C.accent, marginBottom: '.25rem' }}>
                    {pkg.price}
                  </div>
                  <div style={{ fontSize: '.875rem', color: C.mid }}>
                    ⏱️ {pkg.duration}
                  </div>
                </div>
                
                <div style={{ borderTop: `1px solid ${C.borderLight}`, paddingTop: '1.25rem' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '.65rem', listStyle: 'none', padding: 0 }}>
                    {pkg.features.map((feature, fi) => (
                      <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', fontSize: '.9rem', color: C.mid, lineHeight: 1.6 }}>
                        <span style={{ color: C.accent, fontSize: '.85rem', flexShrink: 0, fontWeight: 600 }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={`https://wa.me/254706025696?text=Hi%20Joy,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.category)}%20package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-p"
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    marginTop: '1.5rem',
                    background: pkg.popular ? C.accent : C.bgAlt,
                    color: pkg.popular ? 'white' : C.accent,
                    border: pkg.popular ? 'none' : `1px solid ${C.accent}`
                  }}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: '3rem', 
            padding: '1.75rem', 
            background: C.bgAlt, 
            border: `1px solid ${C.border}`, 
            borderRadius: '8px',
            borderLeft: `4px solid ${C.accent}`
          }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: C.text, marginBottom: '.75rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              Additional Services
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', fontSize: '.9rem', color: C.mid }}>
              <div>• <strong>Maintenance:</strong> KES 5,000 - 15,000/month</div>
              <div>• <strong>Domain & Hosting:</strong> KES 3,000 - 8,000/year</div>
              <div>• <strong>API Integration:</strong> KES 15,000 - 50,000</div>
              <div>• <strong>Payment Gateway:</strong> KES 20,000 - 40,000</div>
              <div>• <strong>Training & Documentation:</strong> KES 5,000</div>
              <div>• <strong>Rush Delivery:</strong> 30% of project cost</div>
            </div>
          </div>
          
          <p style={{ fontSize: '.875rem', color: C.light, textAlign: 'center', marginTop: '2rem', fontStyle: 'italic' }}>
            * Prices are estimates and may vary based on project scope. Contact me for a detailed quote tailored to your needs.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="sec sec-alt">
        <div className="wrap contact-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>
          <div>
            <div className="slabel">Get in touch</div>
            <div className="sh">Let's build something together</div>
            <p style={{ fontSize:'.88rem', color:C.mid, lineHeight:1.78, marginBottom:'1.5rem' }}>
              Need an e-commerce store, business website, or mobile app? I'm available for new projects. Let's talk.
            </p>
            <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap' }}>
              <a href="https://wa.me/254706025696?text=Hi%20Joy,%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ background:'#25D366' }}>
                <MessageCircle size={16}/>WhatsApp Me
              </a>
              <a href="mailto:ndabari79@gmail.com" className="btn-o">
                <Mail size={16}/>Send Email
              </a>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
            {[
              { icon:<MessageCircle size={15}/>, label:'WhatsApp', value:'+254 706 025 696', href:'https://wa.me/254706025696?text=Hi%20Joy,%20I%27d%20like%20to%20discuss%20a%20project', color:'#25D366' },
              { icon:<Mail size={15}/>, label:'Email', value:'ndabari79@gmail.com', href:'mailto:ndabari79@gmail.com', color:'#0D9E99' },
              { icon:<Phone size={15}/>, label:'Phone', value:'+254 706 025 696', href:'tel:+254706025696', color:'#6366F1' },
              // { icon:<Phone size={15}/>, label:'Alt. Phone', value:'+254 727 834 901', href:'tel:+254727834901', color:'#6366F1' },
              { icon:<Github size={15}/>, label:'GitHub', value:'github.com/Nimmoh', href:'https://github.com/Nimmoh', color:'#111318' },
              { icon:<Linkedin size={15}/>, label:'LinkedIn', value:'Joy Ndabari', href:'https://www.linkedin.com/in/joy-ndabari-36897a165', color:'#0A66C2' },
            ].map((c,i) => (
              <a key={i} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" className="clink">
                <span style={{ color:c.color, flexShrink:0 }}>{c.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:'.63rem', color:C.light, textTransform:'uppercase', letterSpacing:'.07em', fontWeight:600, marginBottom:'.08rem' }}>{c.label}</div>
                  <div style={{ fontSize:'.83rem', fontWeight:500, color:C.text }}>{c.value}</div>
                </div>
                <ArrowRight size={12} style={{ color:C.light }}/>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FOOTER */}
      <footer style={{ background:C.bg }}>
        <div className="wrap" style={{ padding:'1.25rem 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'.75rem' }}>
          <span className="mono" style={{ fontSize:'.65rem', color:C.light }}>© 2026 Joy Ndabari · Nairobi</span>
          <div style={{ display:'flex', gap:'1rem' }}>
            {[
              { href:'https://github.com/Nimmoh', icon:<Github size={15}/> },
              { href:'https://www.linkedin.com/in/joy-ndabari-36897a165', icon:<Linkedin size={15}/> },
              { href:'mailto:ndabari79@gmail.com', icon:<Mail size={15}/> },
            ].map((l,i) => (
              <a key={i} href={l.href} target={l.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
                style={{ color:C.light, transition:'color .2s' }}
                onMouseOver={e=>e.currentTarget.style.color='#0D9E99'}
                onMouseOut={e=>e.currentTarget.style.color=C.light}>
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <a 
        href="https://wa.me/254706025696?text=Hi%20Joy,%20I%27d%20like%20to%20discuss%20a%20project" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <MessageCircle />
      </a>
      
      <a 
        href="mailto:ndabari79@gmail.com" 
        className="email-float"
        title="Send Email"
      >
        <Mail />
      </a>
    </div>
  );
};

export default Portfolio;