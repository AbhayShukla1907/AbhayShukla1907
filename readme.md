<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:00ff41&height=220&section=header&text=ABHAY%20KUMAR%20SHUKLA&fontSize=42&fontColor=00ff41&fontAlignY=38&desc=DevOps%20Engineer%20%7C%20Cloud%20%26%20Automation&descAlignY=55&descColor=39ff14&animation=fadeIn" />
</div>
<div align="center">
```bash
abhay@devops-insiders:~$ whoami
```
 
```
> ABHAY KUMAR SHUKLA
> role       : DevOps Engineer Intern @ DevOps Insiders (Noida)
> since      : Dec 2025
> focus      : Cloud Infra | CI/CD Automation | IaC | Observability
> secondary  : Generative AI / LLMs / RAG / MLOps
> certified  : AZ-104 (Azure Administrator Associate)
> status     : provisioning infrastructure, breaking pipelines, fixing them again
```
 
</div>
<p align="center">
  <img src="https://img.shields.io/badge/status-actively_shipping-00ff41?style=for-the-badge&labelColor=0d1117" />
  <img src="https://img.shields.io/badge/based_in-Noida,_India-39ff14?style=for-the-badge&labelColor=0d1117" />
  <img src="https://komarev.com/ghpvc/?username=AbhayShukla1907&label=PROFILE+VIEWS&color=00ff41&style=for-the-badge" />
</p>
---
 
### `$ cat tech-stack.yaml`
 
<p align="center">
  <img src="https://skillicons.dev/icons?i=azure,aws,gcp,docker,kubernetes,terraform,ansible,jenkins,githubactions,prometheus,grafana,git,github,linux,nginx,bash,py,vscode&theme=dark" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Helm-0F1689?style=flat-square&logo=helm&logoColor=00ff41&labelColor=0d1117" />
  <img src="https://img.shields.io/badge/ArgoCD-EF7B4D?style=flat-square&logo=argo&logoColor=00ff41&labelColor=0d1117" />
  <img src="https://img.shields.io/badge/SonarQube-4E9BCD?style=flat-square&logo=sonarqube&logoColor=00ff41&labelColor=0d1117" />
  <img src="https://img.shields.io/badge/Trivy-1904DA?style=flat-square&logo=trivy&logoColor=00ff41&labelColor=0d1117" />
  <img src="https://img.shields.io/badge/Azure_DevOps-0078D7?style=flat-square&logo=azuredevops&logoColor=00ff41&labelColor=0d1117" />
  <img src="https://img.shields.io/badge/AKS-0078D4?style=flat-square&logo=kubernetes&logoColor=00ff41&labelColor=0d1117" />
</p>
<p align="center">
  <sub><b>AI/ML (secondary):</b> LLMs · RAG · MLOps basics · NumPy · Pandas · Scikit-learn</sub>
</p>
---
 
### `$ ./deploy-pipeline.sh --visualize`
 
```mermaid
flowchart LR
    A[Code Commit] --> B[Jenkins / GitHub Actions]
    B --> C[Docker Build]
    C --> D[Terraform Provision]
    D --> E[Deploy to AKS / K8s]
    E --> F[Prometheus + Grafana]
    F -->|feedback loop| A
 
    style A fill:#0d1117,stroke:#00ff41,color:#00ff41
    style B fill:#0d1117,stroke:#00ff41,color:#00ff41
    style C fill:#0d1117,stroke:#00ff41,color:#00ff41
    style D fill:#0d1117,stroke:#00ff41,color:#00ff41
    style E fill:#0d1117,stroke:#00ff41,color:#00ff41
    style F fill:#0d1117,stroke:#00ff41,color:#00ff41
```
 
---
 
### `$ ls ./projects/`
 
<details>
<summary><b>🟢 Azure Landing Zone Implementation & CI/CD Modernization</b></summary>
<br>
Designed and implemented a Hub-and-Spoke Azure Landing Zone for a BFSI enterprise client to standardize network segregation, governance, and workload isolation across Dev/QA/Prod subscriptions.
 
- Migrated manual infrastructure provisioning to **Terraform**, using reusable modules for VNets, subnets, NSGs, and Load Balancers with remote state managed in Azure Storage.
- Built **Azure DevOps** CI/CD pipelines to build and push Docker images to **ACR** and deploy containerized workloads to **AKS** with environment-based approval gates.
- Configured **Azure Key Vault** for centralized secrets management and **Azure RBAC** for team-based, least-privilege access.
- Set up **Azure Monitor** and **Log Analytics** for pipeline and infrastructure alerting; provided production support for deployment/infra incidents.
- **Result:** ~40% reduction in infrastructure provisioning effort, deployment time cut from hours to under 30 minutes, improved release consistency across environments.
`Tech Stack:` Azure · Azure DevOps · Terraform · AKS · ACR · Docker · Azure Key Vault · Azure Monitor · Log Analytics · RBAC · Git
 
</details>
<details>
<summary><b>🟢 AWS Three-Tier Architecture</b></summary>
<br>
Designed and deployed a highly available three-tier web architecture on AWS.
 
- Created public and private subnets across multiple Availability Zones.
- Configured Application Load Balancer and Auto Scaling Groups.
- Hosted backend services on EC2 and database on Amazon RDS.
- Provisioned complete infrastructure using Terraform.
- Configured CloudWatch monitoring and IAM-based access control.
`Tech Stack:` AWS VPC · EC2 · ALB · Auto Scaling · RDS · S3 · IAM · Route 53 · CloudWatch · Terraform · Git · Linux
 
</details>
<details>
<summary><b>🟢 End-to-End CI/CD Pipeline for Microservices</b></summary>
<br>
Built an automated CI/CD pipeline for containerized microservices.
 
- Integrated **SonarQube** for code quality and **Trivy** for image security scanning.
- Deployed applications to Kubernetes using **Helm** charts.
- Implemented GitOps deployment using **ArgoCD**.
`Tech Stack:` Jenkins · GitHub · Docker · Kubernetes · Helm · ArgoCD · SonarQube · Trivy · Git · Linux · Bash
 
</details>
---
 
### `$ cat certifications.log`
 
<p align="center">
  <img src="https://img.shields.io/badge/AZ--104-Azure_Administrator_Associate-00ff41?style=for-the-badge&logo=microsoftazure&logoColor=black&labelColor=0d1117" />
  <br>
  <img src="https://img.shields.io/badge/AZ--900-Azure_Fundamentals-39ff14?style=for-the-badge&logo=microsoftazure&logoColor=black&labelColor=0d1117" />
  <br>
  <img src="https://img.shields.io/badge/Hero_Vired_x_Microsoft-DevOps_%26_Cloud_Engineering-00ff41?style=for-the-badge&labelColor=0d1117" />
  <br>
  <img src="https://img.shields.io/badge/Hero_Vired_x_Microsoft-Generative_AI_for_Data,_Tech_%26_Finance-39ff14?style=for-the-badge&labelColor=0d1117" />
</p>
---
 
### `$ ./stats.sh --github`
 
<div align="center">
<img height="165" src="https://github-readme-stats.vercel.app/api?username=AbhayShukla1907&show_icons=true&theme=chartreuse-dark&hide_border=true&bg_color=0d1117&title_color=00ff41&text_color=c9d1d9&icon_color=39ff14" />
<img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbhayShukla1907&layout=compact&theme=chartreuse-dark&hide_border=true&bg_color=0d1117&title_color=00ff41&text_color=c9d1d9" />
<img src="https://streak-stats.demolab.com?user=AbhayShukla1907&theme=github-green-purple&hide_border=true&background=0D1117&stroke=00ff41&ring=39ff14&fire=00ff41&currStreakLabel=00ff41" />
<img src="https://github-profile-trophy.vercel.app/?username=AbhayShukla1907&theme=algolia&no-frame=true&margin-w=8&margin-h=8&column=7" />
</div>
---
 
### `$ ./connect.sh`
 
<p align="center">
  <a href="mailto:abhay06072002@gmail.com">
    <img src="https://img.shields.io/badge/Email-abhay06072002%40gmail.com-00ff41?style=for-the-badge&logo=gmail&logoColor=black&labelColor=0d1117" />
  </a>
  <a href="https://github.com/AbhayShukla1907">
    <img src="https://img.shields.io/badge/GitHub-AbhayShukla1907-39ff14?style=for-the-badge&logo=github&logoColor=black&labelColor=0d1117" />
  </a>
</p>
<div align="center">
```bash
abhay@devops-insiders:~$ echo "Infrastructure as Code. Pipelines that don't break at 2 AM. That's the goal."
```
 
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00ff41,100:0d1117&height=100&section=footer" />
</div>
