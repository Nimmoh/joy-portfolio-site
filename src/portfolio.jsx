import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X, ExternalLink, Code, Database, Smartphone, ChevronRight, ArrowRight, ShoppingCart, Globe, CheckCircle, Phone, Users, MessageCircle, Star, Network } from 'lucide-react';

// ── Colour tokens
const C = {
  bg: '#FFFFFF', bgAlt: '#F7F8FC', border: '#E8EAF0',
  text: '#111318', mid: '#52596B', light: '#9BA3B5',
  accent: '#0D9E99', accentBg: '#F0FDFB', accentBorder: '#CCFAF5',
};

const Portfolio = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState('all');

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      for (const s of ['home','services','clients','work','about','experience','contact']) {
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
    {  color:'#EF4444', bg:'#FFF5F5', title:'Mobile Apps (Flutter)', points:['iOS & Android (Flutter)','API & payment integration','POS & inventory apps','Offline capability'] },
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
  const navLinks = ['services','clients','work','about','experience','contact'];

  return (
    <div style={{ fontFamily:"'Inter', 'DM Sans', sans-serif", background:C.bg, color:C.text, minHeight:'100vh', overflowX:'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,600;1,400&family=Space+Mono:wght@700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        ::-webkit-scrollbar { width:3px; } ::-webkit-scrollbar-thumb { background:#0D9E99; border-radius:2px; }
        .serif { font-family:'Lora',serif; }
        .mono  { font-family:'Space Mono',monospace; }

        nav { position:fixed; top:0; left:0; right:0; z-index:100; transition:all .3s; }
        .scrolled { background:rgba(255,255,255,.97); backdrop-filter:blur(12px); border-bottom:1px solid #E8EAF0; box-shadow:0 1px 8px rgba(0,0,0,.05); }
        .nb { background:none; border:none; font-size:.82rem; font-weight:500; color:#6B7280; cursor:pointer; padding:.25rem 0; position:relative; transition:color .2s; }
        .nb::after { content:''; position:absolute; bottom:-1px; left:0; width:0; height:1.5px; background:#0D9E99; transition:width .3s; border-radius:2px; }
        .nb:hover,.nb.on { color:#111318; }
        .nb:hover::after,.nb.on::after { width:100%; }

        .btn-p { background:#0D9E99; color:#fff; font-weight:600; font-size:.85rem; padding:.6rem 1.4rem; border-radius:6px; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:.4rem; text-decoration:none; transition:all .2s; }
        .btn-p:hover { background:#0B8A85; box-shadow:0 4px 16px rgba(13,158,153,.25); transform:translateY(-1px); }
        .btn-o { background:transparent; color:#111318; font-weight:500; font-size:.85rem; padding:.58rem 1.4rem; border-radius:6px; border:1.5px solid #D1D5DB; cursor:pointer; display:inline-flex; align-items:center; gap:.4rem; text-decoration:none; transition:all .2s; }
        .btn-o:hover { border-color:#0D9E99; color:#0D9E99; transform:translateY(-1px); }

        .sec { padding:4rem 1.5rem; }
        .sec-alt { background:#F7F8FC; }
        .wrap { max-width:1140px; margin:0 auto; }
        .divider { height:1px; background:#E8EAF0; }
        .slabel { font-family:'Space Mono',monospace; font-size:.63rem; letter-spacing:.18em; color:#0D9E99; text-transform:uppercase; font-weight:700; margin-bottom:.5rem; }
        .sh { font-family:'Lora',serif; font-size:clamp(1.5rem,3vw,2.1rem); font-weight:600; color:#111318; margin-bottom:1.75rem; }

        /* service cards — horizontal list feel */
        .svc-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:.85rem; }
        .svc-card { background:#fff; border:1.5px solid #E8EAF0; border-radius:10px; padding:1.25rem 1.25rem 1.4rem; transition:all .25s; }
        .svc-card:hover { border-color:#C7D2F8; box-shadow:0 4px 18px rgba(0,0,0,.07); transform:translateY(-2px); }

        /* client cards — compact */
        .cli-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1rem; }
        .cli-card { background:#fff; border:1.5px solid #E8EAF0; border-radius:10px; overflow:hidden; transition:all .25s; }
        .cli-card:hover { border-color:#CBD5E1; box-shadow:0 6px 22px rgba(0,0,0,.09); transform:translateY(-2px); }

        /* project cards */
        .prj-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:.85rem; }
        .prj-card { background:#fff; border:1.5px solid #E8EAF0; border-radius:10px; overflow:hidden; transition:all .25s; }
        .prj-card:hover { border-color:#C7D2F8; box-shadow:0 4px 18px rgba(0,0,0,.07); transform:translateY(-2px); }

        .chip { font-size:.68rem; padding:.18rem .52rem; border-radius:4px; font-weight:500; }
        .tech-chip { background:#F3F4F6; border:1px solid #E5E7EB; color:#52596B; font-size:.67rem; padding:.15rem .45rem; border-radius:3px; }

        .pill { background:#F3F4F6; border:1px solid #E5E7EB; padding:.28rem .75rem; border-radius:100px; font-size:.75rem; color:#374151; transition:all .18s; display:inline-block; }
        .pill:hover { background:#E6FAF9; border-color:#0D9E99; color:#0D9E99; }

        .clink { display:flex; align-items:center; gap:.85rem; padding:.85rem 1rem; background:#F7F8FC; border:1.5px solid #E8EAF0; border-radius:8px; color:#111318; text-decoration:none; transition:all .2s; }
        .clink:hover { border-color:#0D9E99; background:#F0FDFB; transform:translateX(3px); }

        .live-dot { width:6px; height:6px; border-radius:50%; background:#10B981; display:inline-block; animation:lp 2s infinite; }
        @keyframes lp { 0%,100%{box-shadow:0 0 0 0 rgba(16,185,129,.4)} 50%{box-shadow:0 0 0 4px rgba(16,185,129,0)} }
        .collab-b { display:inline-flex; align-items:center; gap:.3rem; background:#EEF2FF; border:1px solid #C7D2F8; border-radius:100px; padding:.2rem .6rem; font-size:.66rem; font-weight:600; color:#4F46E5; }

        .tab-b { padding:.38rem 1rem; border-radius:100px; font-size:.78rem; font-weight:500; border:1.5px solid #E4E7EF; background:#fff; color:#6B7280; cursor:pointer; transition:all .18s; }
        .tab-b.on,.tab-b:hover { background:#E6FAF9; border-color:#0D9E99; color:#0D9E99; }

        .exp-row { display:grid; grid-template-columns:160px 1fr; gap:1.5rem; padding:1.5rem 0; border-bottom:1px solid #E8EAF0; }
        .exp-row:last-child { border-bottom:none; }

        @keyframes up { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .a0{animation:up .6s ease-out forwards}
        .a1{animation:up .6s .08s ease-out forwards;opacity:0}
        .a2{animation:up .6s .16s ease-out forwards;opacity:0}
        .a3{animation:up .6s .24s ease-out forwards;opacity:0}
        .a4{animation:up .6s .32s ease-out forwards;opacity:0}

        @media(max-width:768px){
          .dn{display:none!important} .ds{display:block!important}
          .exp-row{grid-template-columns:1fr;gap:.25rem}
          .about-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
        }
        @media(min-width:769px){.ds{display:none!important}}

        /* WhatsApp Floating Button */
        .whatsapp-float {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          border: none;
        }
        .whatsapp-float:hover {
          background: #20BA5A;
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
        }
        .whatsapp-float svg {
          width: 32px;
          height: 32px;
        }

        /* Email Floating Button */
        .email-float {
          position: fixed;
          bottom: 95px;
          right: 25px;
          background: #0D9E99;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(13, 158, 153, 0.4);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          border: none;
        }
        .email-float:hover {
          background: #0B8A85;
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(13, 158, 153, 0.6);
        }

        @media(max-width:768px){
          .whatsapp-float, .email-float {
            width: 50px;
            height: 50px;
          }
          .whatsapp-float svg {
            width: 26px;
            height: 26px;
          }
          .email-float {
            bottom: 85px;
          }
        }
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''} style={{ background: scrolled ? undefined : 'rgba(255,255,255,0)' }}>
        <div className="wrap" style={{ padding:'.85rem 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
            <span className="mono" style={{ fontSize:'.9rem', color:'#0D9E99' }}>Joy Ndabari</span>
            <span style={{ width:1, height:14, background:'#D1D5DB', display:'inline-block' }} />
            <span style={{ fontSize:'.75rem', color:C.light, fontWeight:500 }}>Sofware Developer</span>
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
            <a href="mailto:ndabari79@gmail.com" className="btn-p" style={{ marginTop:'.85rem', width:'100%', justifyContent:'center' }}>Hire Me</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ background:'linear-gradient(155deg,#F0FDFB 0%,#F7F8FC 50%,#fff 100%)', padding:'7.5rem 1.5rem 4.5rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-100, right:-100, width:420, height:420, borderRadius:'50%', background:'radial-gradient(circle,rgba(13,158,153,.07) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div className="wrap">
          <div style={{ maxWidth:620 }}>
            <div className="slabel a0" style={{ display:'flex', alignItems:'center', gap:'.45rem', marginBottom:'1rem' }}>
              <span className="live-dot" />Available for projects · Nairobi
            </div>
            <h1 className="serif a1" style={{ fontSize:'clamp(2.2rem,5.5vw,3.9rem)', lineHeight:1.12, marginBottom:'1.1rem', fontWeight:600 }}>
              <span style={{ color:'#0D9E99' }}>Building Solutions</span>{' '}
              <span style={{ fontStyle:'italic', fontWeight:400 }}>that grow businesses.</span>
            </h1>
            <p className="a2" style={{ fontSize:'1rem', color:C.mid, lineHeight:1.75, maxWidth:480, marginBottom:'1.75rem' }}>
              Software developer specializing in e-commerce platforms, business web apps, and mobile solutions. 
            </p>
            <div className="a3" style={{ display:'flex', gap:'.75rem', flexWrap:'wrap', marginBottom:'2.75rem' }}>
              <a href="https://wa.me/254706025696?text=Hi%20Joy,%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ background:'#25D366' }}>
                <MessageCircle size={14}/>WhatsApp Me
              </a>
              <a href="mailto:ndabari79@gmail.com" className="btn-o">
                <Mail size={14}/>Email Me
              </a>
              {/* <button onClick={() => go('clients')} className="btn-o">View work</button> */}
            </div>
            {/* <div className="a4" style={{ display:'flex', gap:'.85rem', flexWrap:'wrap' }}>
              {[
                { n:'3+', l:'Years experience', c:'#0D9E99' },
                { n:'20+', l:'Projects delivered', c:'#6366F1' },
                { n:'5+', l:'Live client sites', c:'#10B981' },
              ].map((s,i) => (
                <div key={i} style={{ textAlign:'center', padding:'.9rem 1.4rem', background:'#fff', border:`1.5px solid ${C.border}`, borderRadius:8, flex:'1 1 100px' }}>
                  <div style={{ fontFamily:"'Lora',serif", fontSize:'2rem', fontWeight:600, color:s.c, lineHeight:1 }}>{s.n}</div>
                  <div style={{ fontSize:'.72rem', color:C.light, marginTop:'.2rem' }}>{s.l}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <div className="divider" />

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
                      <span key={hi} className="chip" style={{ background:p.bg, border:`1px solid ${p.color}25`, color:p.color }}>✓ {h}</span>
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
          <div className="sh">Professional experience</div>
          {experience.map((e,i) => (
            <div key={i} className="exp-row">
              <div style={{ paddingTop:'.1rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'.45rem' }}>
                  <div style={{ width:9, height:9, borderRadius:'50%', background:e.dot, flexShrink:0 }} />
                  <span style={{ fontSize:'.78rem', fontWeight:700, color:C.text }}>{e.company}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize:'.95rem', fontWeight:700, color:C.text, marginBottom:'.6rem' }}>{e.title}</div>
                <div style={{ display:'flex', flexDirection:'column', gap:'.32rem' }}>
                  {e.points.map((pt,pi) => (
                    <div key={pi} style={{ display:'flex', gap:'.55rem', alignItems:'flex-start', fontSize:'.83rem', color:C.mid, lineHeight:1.6 }}>
                     <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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