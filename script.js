/* ==========================================================================
   AKS PORTFOLIO — script.js
   Vanilla JS + GSAP (CDN). No build step. GitHub Pages compatible.
   ========================================================================== */
(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ------------------------------------------------------------------ */
  /* DATA — sourced only from the provided profile. No invented facts.   */
  /* ------------------------------------------------------------------ */
  const SKILLS = {
    Cloud: [
      { name: 'Microsoft Azure', desc: 'Primary cloud platform — VMs, networking, load balancing and resource management.', related: ['AWS', 'Terraform', 'Azure Load Balancer'] },
      { name: 'AWS', desc: 'Used for scalable cloud infrastructure deployment alongside Docker and Kubernetes.', related: ['Docker', 'Kubernetes', 'Terraform'] },
      { name: 'GCP', desc: 'Google Cloud Platform — part of the broader cloud toolkit.', related: ['Azure', 'AWS'] },
    ],
    DevOps: [
      { name: 'Docker', desc: 'Containerization for portable, consistent application environments.', related: ['Kubernetes', 'Nginx', 'CI/CD'] },
      { name: 'Kubernetes', desc: 'Orchestration for containerized workloads at scale.', related: ['Docker', 'AWS', 'Monitoring'] },
      { name: 'Terraform', desc: 'Infrastructure as Code for repeatable, version-controlled provisioning.', related: ['Azure', 'AWS', 'Automation'] },
      { name: 'Ansible', desc: 'Configuration management and automation across infrastructure.', related: ['Terraform', 'Linux'] },
      { name: 'Jenkins', desc: 'CI/CD pipeline automation for build, test and deploy workflows.', related: ['GitHub Actions', 'Docker', 'Kubernetes'] },
      { name: 'GitHub Actions', desc: 'CI/CD workflows triggered directly from GitHub repositories.', related: ['Jenkins', 'Git', 'Docker'] },
      { name: 'Git', desc: 'Version control underpinning every automated workflow.', related: ['GitHub', 'CI/CD'] },
      { name: 'GitHub', desc: 'Source hosting, collaboration and pipeline triggers.', related: ['Git', 'GitHub Actions'] },
    ],
    Infrastructure: [
      { name: 'Infrastructure as Code', desc: 'Defining infrastructure declaratively for repeatability and version control.', related: ['Terraform', 'Cloud Infrastructure'] },
      { name: 'Cloud Infrastructure', desc: 'Design and management of cloud-hosted infrastructure.', related: ['Azure', 'AWS'] },
      { name: 'Resource Provisioning', desc: 'Automated allocation of compute, network and storage resources.', related: ['Terraform', 'IaC'] },
      { name: 'Cloud Resource Optimization', desc: 'Right-sizing and tuning cloud resources for cost and performance.', related: ['Monitoring', 'Cloud Infrastructure'] },
      { name: 'Deployment Automation', desc: 'Automating release workflows end to end.', related: ['CI/CD', 'Kubernetes'] },
    ],
    Monitoring: [
      { name: 'Prometheus', desc: 'Metrics collection for system and application observability.', related: ['Grafana', 'Kubernetes'] },
      { name: 'Grafana', desc: 'Dashboards for visualizing performance and resource metrics.', related: ['Prometheus', 'Incident Response'] },
      { name: 'Nginx', desc: 'Reverse proxy and web server used in deployment workflows.', related: ['Docker', 'Load Balancer'] },
      { name: 'Monitoring & Observability', desc: 'Tracking system health to catch issues before they become incidents.', related: ['Prometheus', 'Grafana'] },
      { name: 'Incident Response', desc: 'Diagnosing and resolving production issues quickly.', related: ['Monitoring', 'Troubleshooting'] },
      { name: 'Troubleshooting', desc: 'Root-causing infrastructure and application issues.', related: ['Linux', 'Monitoring'] },
    ],
    Programming: [
      { name: 'Python', desc: 'Scripting, automation, and ML/data workflows.', related: ['Pandas', 'NumPy', 'Scikit-learn'] },
      { name: 'Bash', desc: 'Shell scripting for Linux automation and tooling.', related: ['Linux', 'Automation'] },
      { name: 'Linux', desc: 'Primary operating environment for servers and tooling.', related: ['Bash', 'Nginx'] },
    ],
    'AI / ML': [
      { name: 'Machine Learning', desc: 'Core ML concepts applied to real datasets.', related: ['Supervised Learning', 'Unsupervised Learning'] },
      { name: 'Supervised Learning', desc: 'Model training on labeled data.', related: ['Model Evaluation', 'Scikit-learn'] },
      { name: 'Unsupervised Learning', desc: 'Pattern discovery in unlabeled data.', related: ['Machine Learning'] },
      { name: 'Model Evaluation', desc: 'Assessing model performance and generalization.', related: ['Scikit-learn', 'Data Analysis'] },
      { name: 'NumPy', desc: 'Numerical computing for data and ML workflows.', related: ['Pandas', 'Python'] },
      { name: 'Pandas', desc: 'Data manipulation and analysis in Python.', related: ['NumPy', 'Data Cleaning'] },
      { name: 'Scikit-learn', desc: 'Classical ML modeling and evaluation toolkit.', related: ['Machine Learning', 'Model Evaluation'] },
      { name: 'Data Cleaning', desc: 'Preparing raw data for reliable analysis.', related: ['Pandas', 'Feature Engineering'] },
      { name: 'Feature Engineering', desc: 'Shaping input features to improve model quality.', related: ['Data Analysis', 'Machine Learning'] },
      { name: 'Data Analysis', desc: 'Extracting insight from structured datasets.', related: ['Pandas', 'NumPy'] },
    ],
    'Generative AI': [
      { name: 'Large Language Models', desc: 'Understanding and applying LLMs in practical workflows.', related: ['Prompt Engineering', 'RAG'] },
      { name: 'Prompt Engineering', desc: 'Designing effective prompts to steer LLM behavior.', related: ['LLMs', 'RAG'] },
      { name: 'RAG', desc: 'Retrieval-Augmented Generation — grounding LLM output in external knowledge.', related: ['Embeddings', 'Semantic Search'] },
      { name: 'Embeddings', desc: 'Vector representations that power semantic search and retrieval.', related: ['RAG', 'Semantic Search'] },
      { name: 'Semantic Search', desc: 'Meaning-based search over embedded content.', related: ['Embeddings', 'Knowledge Retrieval'] },
      { name: 'Knowledge Retrieval', desc: 'Surfacing relevant context for grounded LLM responses.', related: ['RAG', 'Semantic Search'] },
    ],
    MLOps: [
      { name: 'Model Deployment', desc: 'Shipping trained models into production environments.', related: ['ML Pipelines', 'Model Monitoring'] },
      { name: 'ML Pipelines', desc: 'Automating the path from data to deployed model.', related: ['Model Deployment', 'CI/CD'] },
      { name: 'Model Monitoring', desc: 'Tracking deployed model performance over time.', related: ['Monitoring & Observability', 'Model Deployment'] },
    ],
  };

  const PROJECTS = [
    {
      num: '01', title: 'MEAN Stack CRUD Application',
      desc: 'Full-stack CRUD web application built on MEAN architecture with RESTful API integration.',
      stack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
      arch: 'Angular\n  ↓\nNginx\n  ↓\nNode.js / Express\n  ↓\nMongoDB',
      responsibilities: ['Designed backend APIs using Node.js and Express.js', 'Integrated MongoDB for efficient data storage and retrieval', 'Containerized application components using Docker'],
      github: 'https://github.com/AbhayShukla1907/mean-crud-app',
    },
    {
      num: '02', title: 'CI/CD Pipeline Automation',
      desc: 'Automated CI/CD workflows for application build, testing and deployment.',
      stack: ['Jenkins', 'GitHub Actions', 'Git', 'Docker'],
      arch: 'GitHub\n  ↓\nWebhook\n  ↓\nJenkins\n  ↓\nBuild → Test\n  ↓\nDocker\n  ↓\nKubernetes\n  ↓\nProduction',
      responsibilities: ['Designed automated CI/CD workflows for build, testing and deployment'],
      github: '[ADD YOUR LINK]',
    },
    {
      num: '03', title: 'Terraform Infrastructure Automation',
      desc: 'Infrastructure as Code workflows for repeatable cloud resource provisioning and management.',
      stack: ['Terraform', 'Azure', 'AWS'],
      arch: 'Terraform Config\n  ↓\nplan → apply\n  ↓\nAzure / AWS Resources',
      responsibilities: ['Created IaC workflows for repeatable cloud resource provisioning and infrastructure management'],
      github: '[ADD YOUR LINK]',
    },
    {
      num: '04', title: 'Prometheus & Grafana Monitoring',
      desc: 'Monitoring and dashboards for system performance, resource utilization and proactive troubleshooting.',
      stack: ['Prometheus', 'Grafana', 'Linux'],
      arch: 'Exporters\n  ↓\nPrometheus (scrape)\n  ↓\nGrafana (dashboards)\n  ↓\nAlerts',
      responsibilities: ['Configured monitoring and dashboards for system performance and resource utilization'],
      github: '[ADD YOUR LINK]',
    },
    {
      num: '05', title: 'Dockerized Web Application',
      desc: 'Containerized web applications with Nginx-based deployment workflows.',
      stack: ['Docker', 'Nginx', 'Linux'],
      arch: 'App Source\n  ↓\nDocker Build\n  ↓\nNginx (serve)\n  ↓\nContainer Runtime',
      responsibilities: ['Containerized web applications and configured Nginx-based deployment workflows'],
      github: '[ADD YOUR LINK]',
    },
    {
      num: '06', title: 'Azure Load Balancer Lab',
      desc: 'Practical Azure networking environment with multiple VMs, backend pool, load balancing rules and health probes.',
      stack: ['Azure VM', 'Azure Load Balancer', 'Networking', 'Health Probe', 'Backend Pool'],
      arch: 'Client\n  ↓\nAzure Load Balancer\n  ↓\nBackend Pool (VMs)\n  ↓\nHealth Probe monitors each VM',
      responsibilities: ['Built a practical Azure networking environment with multiple virtual machines, backend pool, load balancing rules and health probes'],
      github: '[ADD YOUR LINK]',
    },
  ];

  const CERTS = [
    { code: 'AZ-104', title: 'Microsoft Azure Administrator Associate', issuer: 'Microsoft' },
    { code: 'DevOps & Cloud', title: 'Certificate Program in DevOps & Cloud Engineering', issuer: 'Hero Vired, with Microsoft' },
    { code: 'GenAI', title: 'Integrated Program in Generative AI for Data, Tech & Finance', issuer: 'Hero Vired, with Microsoft' },
  ];

  const LABS = [
    { title: 'Azure Load Balancer', tools: ['Azure VM', 'Load Balancer', 'Health Probe'], problem: 'Distribute traffic reliably across multiple backend VMs.', architecture: 'Client → Load Balancer → Backend Pool (VMs), monitored by health probes.', result: 'Working load-balanced environment with automated health checks routing traffic away from unhealthy instances.' },
    { title: 'Terraform Infrastructure', tools: ['Terraform', 'Azure', 'AWS'], problem: 'Provision cloud resources in a repeatable, version-controlled way.', architecture: 'Terraform config → plan → apply, provisioning resources declaratively.', result: 'Repeatable IaC workflow for cloud resource provisioning.' },
    { title: 'Docker Containerization', tools: ['Docker', 'Linux'], problem: 'Package applications consistently across environments.', architecture: 'App source → Docker build → container runtime.', result: 'Portable containerized application components.' },
    { title: 'Kubernetes Orchestration', tools: ['Kubernetes', 'Docker'], problem: 'Orchestrate containerized workloads for scalability.', architecture: 'Control plane → nodes → pods → containers.', result: 'Applied within CI/CD and cloud infrastructure deployment work.' },
    { title: 'Jenkins CI/CD', tools: ['Jenkins', 'Git'], problem: 'Automate build, test and deployment on every change.', architecture: 'Git push → Jenkins job → build → test → deploy.', result: 'Automated build/test/deploy workflows.' },
    { title: 'Prometheus & Grafana', tools: ['Prometheus', 'Grafana'], problem: 'Gain visibility into system performance and resource use.', architecture: 'Exporters → Prometheus scrape → Grafana dashboards.', result: 'Dashboards surfacing performance metrics and actionable insight.' },
    { title: 'Nginx Deployment', tools: ['Nginx', 'Docker'], problem: 'Serve containerized applications reliably.', architecture: 'Docker container → Nginx reverse proxy → client.', result: 'Nginx-based deployment workflow for containerized apps.' },
    { title: 'Linux Administration', tools: ['Linux', 'Bash'], problem: 'Operate and troubleshoot the systems everything else runs on.', architecture: 'Shell scripting and system administration underpinning all labs.', result: 'Comfortable operating in Linux across every lab and project.' },
  ];

  /* ------------------------------------------------------------------ */
  /* NAVIGATION                                                          */
  /* ------------------------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav__link');
  const setActiveNav = () => {
    let current = sections[0]?.id;
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    sections.forEach(sec => { if (sec.offsetTop <= scrollPos) current = sec.id; });
    navItems.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ------------------------------------------------------------------ */
  /* SCROLL PROGRESS + BACK TO TOP                                       */
  /* ------------------------------------------------------------------ */
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    if (progressBar) progressBar.style.width = `${scrolled}%`;
    if (backToTop) backToTop.hidden = h.scrollTop < 500;
  }, { passive: true });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));

  /* ------------------------------------------------------------------ */
  /* HERO ARCHITECTURE DIAGRAM — sequential node activation              */
  /* ------------------------------------------------------------------ */
  const archNodes = document.querySelectorAll('.arch-node');
  if (archNodes.length && !prefersReducedMotion) {
    let i = 0;
    setInterval(() => {
      archNodes.forEach(n => n.classList.remove('is-active'));
      archNodes[i].classList.add('is-active');
      i = (i + 1) % archNodes.length;
    }, 4500 / archNodes.length);
  } else {
    archNodes.forEach(n => n.classList.add('is-active'));
  }

  /* ------------------------------------------------------------------ */
  /* SCROLL REVEALS (GSAP ScrollTrigger, with IO fallback)               */
  /* ------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll(
    '.about-card, .timeline__card, .education__item, .project-card, .cert-card, .lab-card, .repo-card, .contact__row, .contact__form'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
    revealTargets.forEach((el, idx) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        delay: (idx % 6) * 0.06,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    revealTargets.forEach(el => io.observe(el));
  }

  /* Re-observe dynamically injected cards (projects/certs/labs/repos) */
  function observeReveal(el) {
    el.classList.add('reveal');
    if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
      gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
    } else {
      el.classList.add('is-visible');
    }
  }

  /* ------------------------------------------------------------------ */
  /* TIMELINE FILL                                                       */
  /* ------------------------------------------------------------------ */
  const timelineFill = document.getElementById('timelineFill');
  if (timelineFill) {
    const timeline = document.querySelector('.timeline');
    const updateFill = () => {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.8 - rect.top) / rect.height));
      timelineFill.style.height = `${progress * 100}%`;
    };
    window.addEventListener('scroll', updateFill, { passive: true });
    updateFill();
  }

  /* ------------------------------------------------------------------ */
  /* SKILLS CONSTELLATION                                                */
  /* ------------------------------------------------------------------ */
  const categoriesEl = document.getElementById('skillCategories');
  const cloudEl = document.getElementById('skillCloud');
  const detailEl = document.getElementById('skillDetail');
  const categoryNames = Object.keys(SKILLS);

  function renderSkillDetail(skill) {
    detailEl.innerHTML = `
      <p class="skill-detail__name">${skill.name}</p>
      <p class="skill-detail__desc">${skill.desc}</p>
      <div class="skill-detail__related">${skill.related.map(r => `<span>${r}</span>`).join('')}</div>
    `;
  }

  function renderSkillCloud(category) {
    cloudEl.innerHTML = '';
    SKILLS[category].forEach((skill, idx) => {
      const chip = document.createElement('button');
      chip.className = 'skill-chip';
      chip.type = 'button';
      chip.textContent = skill.name;
      chip.addEventListener('click', () => {
        cloudEl.querySelectorAll('.skill-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderSkillDetail(skill);
      });
      chip.addEventListener('mouseenter', () => renderSkillDetail(skill));
      cloudEl.appendChild(chip);
      if (idx === 0) { chip.classList.add('active'); renderSkillDetail(skill); }
    });
  }

  categoryNames.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = 'skill-category-btn';
    btn.type = 'button';
    btn.setAttribute('role', 'tab');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      categoriesEl.querySelectorAll('.skill-category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkillCloud(cat);
    });
    categoriesEl.appendChild(btn);
    if (idx === 0) { btn.classList.add('active'); renderSkillCloud(cat); }
  });

  /* ------------------------------------------------------------------ */
  /* PROJECTS GRID + MODAL                                               */
  /* ------------------------------------------------------------------ */
  const projectsGrid = document.getElementById('projectsGrid');
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');

  PROJECTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${p.title}`);
    card.innerHTML = `
      <div class="project-card__bg">${p.arch.repeat(4)}</div>
      <p class="project-card__number">PROJECT ${p.num}</p>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <div class="project-card__footer">
        <span class="project-card__more">view details →</span>
      </div>
    `;
    const open = () => openProjectModal(p);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });

    // subtle tilt on hover
    if (!prefersReducedMotion) {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    }

    projectsGrid.appendChild(card);
    observeReveal(card);
  });

  function openProjectModal(p) {
    modalContent.innerHTML = `
      <p class="modal-sub">PROJECT ${p.num}</p>
      <h3 class="modal-title">${p.title}</h3>
      <div class="modal-section">
        <h4>Overview</h4>
        <p>${p.desc}</p>
      </div>
      <div class="modal-section">
        <h4>Architecture</h4>
        <div class="modal-arch">${p.arch}</div>
      </div>
      <div class="modal-section">
        <h4>Key responsibilities</h4>
        <ul>${p.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h4>Technologies</h4>
        <div class="modal-tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      </div>
      <div class="modal-section">
        <h4>Repository</h4>
        <p><a class="btn btn--primary" href="${p.github}" target="_blank" rel="noopener">View on GitHub</a></p>
      </div>
    `;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close')?.focus();
  }
  function closeProjectModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  modal?.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeProjectModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeProjectModal(); });

  /* ------------------------------------------------------------------ */
  /* CERTIFICATIONS                                                      */
  /* ------------------------------------------------------------------ */
  const certsGrid = document.getElementById('certsGrid');
  CERTS.forEach(c => {
    const card = document.createElement('article');
    card.className = 'cert-card';
    card.innerHTML = `
      <p class="cert-card__code">${c.code}</p>
      <h3 class="cert-card__title">${c.title}</h3>
      <p class="cert-card__issuer">${c.issuer}</p>
    `;
    certsGrid.appendChild(card);
    observeReveal(card);
  });

  /* ------------------------------------------------------------------ */
  /* LABS                                                                 */
  /* ------------------------------------------------------------------ */
  const labsGrid = document.getElementById('labsGrid');
  LABS.forEach(lab => {
    const card = document.createElement('article');
    card.className = 'lab-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');
    card.innerHTML = `
      <h3 class="lab-card__title">${lab.title}</h3>
      <div class="lab-card__tools">${lab.tools.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="lab-card__body">
        <p><strong>Problem</strong><br>${lab.problem}</p>
        <p><strong>Architecture</strong><br>${lab.architecture}</p>
        <p><strong>Result</strong><br>${lab.result}</p>
      </div>
    `;
    const toggle = () => {
      const isOpen = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(isOpen));
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    labsGrid.appendChild(card);
    observeReveal(card);
  });

  /* ------------------------------------------------------------------ */
  /* GITHUB API — live stats with graceful fallback                      */
  /* ------------------------------------------------------------------ */
  const GH_USERNAME = 'AbhayShukla1907';
  const ghRepos = document.getElementById('ghRepos');
  const ghFollowers = document.getElementById('ghFollowers');
  const ghFollowing = document.getElementById('ghFollowing');
  const ghRepoList = document.getElementById('ghRepoList');
  const ghLoading = document.getElementById('ghLoading');

  async function loadGitHub() {
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${GH_USERNAME}`),
        fetch(`https://api.github.com/users/${GH_USERNAME}/repos?sort=updated&per_page=6`),
      ]);
      if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API request failed');
      const user = await userRes.json();
      const repos = await reposRes.json();

      ghRepos.textContent = user.public_repos ?? '—';
      ghFollowers.textContent = user.followers ?? '—';
      ghFollowing.textContent = user.following ?? '—';

      ghLoading?.remove();
      if (Array.isArray(repos) && repos.length) {
        repos.forEach(repo => {
          const card = document.createElement('article');
          card.className = 'repo-card';
          card.innerHTML = `
            <p class="repo-card__name">${repo.name}</p>
            <p class="repo-card__desc">${repo.description ? repo.description : 'No description provided.'}</p>
            <div class="repo-card__meta">
              <span>★ ${repo.stargazers_count}</span>
              <span>${repo.language ?? '—'}</span>
            </div>
          `;
          card.addEventListener('click', () => window.open(repo.html_url, '_blank', 'noopener'));
          ghRepoList.appendChild(card);
          observeReveal(card);
        });
      } else {
        ghRepoList.innerHTML = '<p class="github-panel__loading">No public repositories found.</p>';
      }
    } catch (err) {
      // Graceful fallback — never fabricate stats.
      if (ghLoading) ghLoading.textContent = 'GitHub stats unavailable right now — view the profile directly.';
      ghRepos.textContent = '—';
      ghFollowers.textContent = '—';
      ghFollowing.textContent = '—';
    }
  }
  loadGitHub();

  /* ------------------------------------------------------------------ */
  /* CONTACT FORM CONFIGURATION                                          */
  /* ------------------------------------------------------------------ */
  // This is a static site with no backend. By default the form opens a
  // pre-filled email via mailto:. To receive submissions directly without
  // a backend, sign up for a free endpoint at https://formspree.io or
  // https://web3forms.com, then set ACTION_ENDPOINT below and switch
  // USE_MAILTO to false.
  const CONTACT_CONFIG = {
    USE_MAILTO: true,
    ACTION_ENDPOINT: '', // e.g. 'https://formspree.io/f/yourFormId'
    TARGET_EMAIL: 'abhayshukla.devops@gmail.com',
  };

  const contactForm = document.getElementById('contactForm');
  const contactFormNote = document.getElementById('contactFormNote');

  contactForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    if (!name || !email || !message) {
      contactFormNote.textContent = 'Please fill in all fields.';
      return;
    }

    if (CONTACT_CONFIG.USE_MAILTO || !CONTACT_CONFIG.ACTION_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${CONTACT_CONFIG.TARGET_EMAIL}?subject=${subject}&body=${body}`;
      contactFormNote.textContent = 'Opening your email client…';
      return;
    }

    try {
      contactFormNote.textContent = 'Sending…';
      const res = await fetch(CONTACT_CONFIG.ACTION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      contactFormNote.textContent = res.ok ? 'Message sent — thank you!' : 'Something went wrong. Please email directly.';
      if (res.ok) contactForm.reset();
    } catch {
      contactFormNote.textContent = 'Network error — please email directly.';
    }
  });

  /* ------------------------------------------------------------------ */
  /* BACKGROUND PARTICLES (lightweight canvas)                           */
  /* ------------------------------------------------------------------ */
  const canvas = document.getElementById('particleCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = Math.min(window.innerHeight, 900);
    }
    function initParticles() {
      const count = Math.min(50, Math.floor((w * h) / 32000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    resize();
    initParticles();
    draw();
    window.addEventListener('resize', () => { resize(); initParticles(); });
  }

  /* ------------------------------------------------------------------ */
  /* MISC                                                                 */
  /* ------------------------------------------------------------------ */
  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

})();
