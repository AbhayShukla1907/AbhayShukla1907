<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0F0F0F,100:0F0F0F&height=2&section=header"/>

<pre>
<b><font color="#39FF14">abhay@devops</font></b>:<b><font color="#00C6FF">~</font></b>$ whoami
</pre>

# ABHAY KUMAR SHUKLA

### `DevOps Engineer` · `Cloud & Infrastructure Automation` · `AZ-104 Certified`

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&duration=3000&pause=800&color=39FF14&center=true&vCenter=true&width=650&lines=deploying+infra+like+its+production+(because+it+is);terraform+apply+%E2%86%92+coffee+%E2%86%92+repeat;automating+what+used+to+be+manual;currently%3A+shipping+CI%2FCD%2C+learning+RAG"/>

<br/>

[![LinkedIn](https://img.shields.io/badge/LINKEDIN-black?style=for-the-badge&logo=linkedin&logoColor=39FF14&labelColor=0F0F0F)](https://linkedin.com)
[![Gmail](https://img.shields.io/badge/EMAIL-black?style=for-the-badge&logo=gmail&logoColor=39FF14&labelColor=0F0F0F)](mailto:abhay06072002@gmail.com)
[![GitHub](https://img.shields.io/badge/GITHUB-black?style=for-the-badge&logo=github&logoColor=39FF14&labelColor=0F0F0F)](https://github.com/AbhayShukla1907)

</div>

<br/>

## `$` cat about.txt

```yaml
name:            Abhay Kumar Shukla
role:            DevOps Engineer Intern @ DevOps Insiders, Noida
based_in:        India
education:       B.Tech, Electrical Engineering (2025)
certified:       AZ-104 · AZ-900

currently:
  building:      Azure Landing Zones for BFSI-grade enterprise clients
  learning:      Generative AI · RAG pipelines · MLOps
  impact:        ~40% less provisioning effort | deploys cut to <30 min

philosophy: >
  If I'm doing it manually twice, the third time it becomes a pipeline.
```

<br/>

## `$` ls -la tech-stack/

<div align="center">

**Cloud & Infra**
<br/>
<img src="https://skillicons.dev/icons?i=azure,aws,gcp,terraform,ansible,linux&theme=dark" />

<br/><br/>

**Containers & Orchestration**
<br/>
<img src="https://skillicons.dev/icons?i=docker,kubernetes,helm&theme=dark" />

<br/><br/>

**CI/CD & GitOps**
<br/>
<img src="https://skillicons.dev/icons?i=jenkins,githubactions,azure,git,github&theme=dark" />

<br/><br/>

**Monitoring & Scripting**
<br/>
<img src="https://skillicons.dev/icons?i=prometheus,grafana,python,bash&theme=dark" />

</div>

<div align="center">

<br/>

![ArgoCD](https://img.shields.io/badge/ArgoCD-black?style=flat-square&logo=argo&logoColor=EF7B4D&labelColor=0F0F0F)
![SonarQube](https://img.shields.io/badge/SonarQube-black?style=flat-square&logo=sonarqube&logoColor=4E9BCD&labelColor=0F0F0F)
![Trivy](https://img.shields.io/badge/Trivy-black?style=flat-square&logo=aquasecurity&logoColor=1904DA&labelColor=0F0F0F)
![Nginx](https://img.shields.io/badge/Nginx-black?style=flat-square&logo=nginx&logoColor=009639&labelColor=0F0F0F)
![NumPy](https://img.shields.io/badge/NumPy-black?style=flat-square&logo=numpy&logoColor=013243&labelColor=0F0F0F)
![Pandas](https://img.shields.io/badge/Pandas-black?style=flat-square&logo=pandas&logoColor=E70488&labelColor=0F0F0F)
![Scikit](https://img.shields.io/badge/Scikit--learn-black?style=flat-square&logo=scikitlearn&logoColor=F7931E&labelColor=0F0F0F)

</div>

<br/>

## `$` exec ./deploy-pipeline.sh

```mermaid
graph LR
    A["git push"] --> B["Jenkins / GH Actions"]
    B --> C["SonarQube + Trivy scan"]
    C --> D["Docker build → ACR"]
    D --> E["terraform apply"]
    E --> F["ArgoCD → AKS"]
    F --> G["Prometheus + Grafana"]

    style A fill:#0F0F0F,stroke:#39FF14,color:#39FF14
    style B fill:#0F0F0F,stroke:#D24939,color:#D24939
    style C fill:#0F0F0F,stroke:#4E9BCD,color:#4E9BCD
    style D fill:#0F0F0F,stroke:#2496ED,color:#2496ED
    style E fill:#0F0F0F,stroke:#7B42BC,color:#B583FF
    style F fill:#0F0F0F,stroke:#EF7B4D,color:#EF7B4D
    style G fill:#0F0F0F,stroke:#E6522C,color:#E6522C
```

<br/>

## `$` ls -la projects/

<details open>
<summary><b>🏢 azure-landing-zone/</b> — Hub-and-Spoke Landing Zone for a BFSI enterprise client</summary>
<br/>

Migrated manual infra provisioning to modular **Terraform**. Built **Azure DevOps** pipelines pushing to **ACR** and deploying to **AKS** with environment-based approval gates. Configured **Key Vault**, **RBAC**, and **Monitor/Log Analytics** for centralized secrets and alerting.

> **Impact:** `-40% provisioning effort` · `deploy time: hours → <30 min`

`Azure` `Terraform` `AKS` `ACR` `Key Vault` `RBAC`

</details>

<details>
<summary><b>🌐 aws-three-tier-arch/</b> — Highly available three-tier web architecture</summary>
<br/>

Public/private subnets across multiple Availability Zones, **ALB** + **Auto Scaling** in front of EC2, **RDS** for the database layer — all provisioned via **Terraform** and monitored with **CloudWatch**.

`AWS VPC` `EC2` `ALB` `Auto Scaling` `RDS` `Terraform` `CloudWatch`

</details>

<details>
<summary><b>🔄 microservices-cicd/</b> — End-to-end pipeline for containerized microservices</summary>
<br/>

**Jenkins** pipeline integrating **SonarQube** (code quality) and **Trivy** (image security scanning), deploying to **Kubernetes** via **Helm** charts with **GitOps** delivery through **ArgoCD**.

`Jenkins` `Docker` `Kubernetes` `Helm` `ArgoCD` `SonarQube` `Trivy`

</details>

<br/>

## `$` cat certifications.log

<div align="center">

| status | certification | issuer |
|:---:|---|---|
| ✅ | AZ-104 — Azure Administrator Associate | Microsoft |
| ✅ | AZ-900 — Azure Fundamentals | Microsoft |
| ✅ | DevOps & Cloud Engineering | Hero Vired × Microsoft |
| ✅ | Generative AI for Data, Tech & Finance | Hero Vired × Microsoft |

</div>

<br/>

## `$` ./github-stats.sh --verbose

<div align="center">

<img height="165" src="https://github-readme-stats.vercel.app/api?username=AbhayShukla1907&show_icons=true&theme=dark&hide_border=true&bg_color=0F0F0F&title_color=39FF14&icon_color=39FF14&text_color=c9d1d9"/>
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbhayShukla1907&layout=compact&theme=dark&hide_border=true&bg_color=0F0F0F&title_color=39FF14&text_color=c9d1d9"/>

<br/>

<img src="https://streak-stats.demolab.com/?user=AbhayShukla1907&theme=dark&hide_border=true&background=0F0F0F&ring=39FF14&fire=39FF14&currStreakLabel=39FF14"/>

<br/>

<img src="https://github-profile-trophy.vercel.app/?username=AbhayShukla1907&theme=darkhub&no-frame=true&margin-w=8&row=1"/>

</div>

<br/>

<img src="https://komarev.com/ghpvc/?username=AbhayShukla1907&label=PROFILE+VIEWS&color=39FF14&style=for-the-badge&labelColor=0F0F0F" align="center"/>

<br/><br/>

<div align="center">

## `$` echo "let's build something reliable"

Open to **DevOps / Cloud / Platform Engineering** roles.
Always up for a conversation about infrastructure, automation, or making deployments boring — in the best way.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0F0F0F,100:0F0F0F&height=2&section=footer"/>

</div>
