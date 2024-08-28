// public/initLocalStorage.js
(function () {
  const allProjects = {
    projectInfo: [
      {
        projectName: "React Deep Dive",
        like: false,
        description:
          "React의 깊은 이해도를 위한 프로젝트입니다. 우리 프로젝트는 React에 대한 심층적으로 구조화를 구성할 수 있습니다.",
        crewInfo: {
          userName: "So engineering",
          userEmail: "kokoball@gmail.com",
          nickName: "Soya",
          position: "프론트엔드",
          tools: [
            { stackName: "React" },
            { stackName: "Javascript" },
            { stackName: "Typescript" },
            { stackName: "Nodejs" },
            { stackName: "Vue" },
          ],
          years: 2,
          projectCount: 2,
        },
        recruitmentInfo: [
          {
            position: "프론트엔드",
            tools: [{ stackName: "React" }, { stackName: "Javascript" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-08-27T11:36:38.244Z",
              endDate: "2024-09-27T11:36:38.244Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-08-27T11:36:38.243Z",
          endDate: "2024-12-27T11:36:38.244Z",
        },
      },
      {
        projectName: "Next.js Performance Optimization",
        like: true,
        description:
          "Next.js 애플리케이션의 성능을 최적화하는 프로젝트입니다. 서버 사이드 렌더링과 정적 생성을 효과적으로 활용하는 방법을 탐구합니다.",
        tools: [{ stackName: "Nextjs" }, { stackName: "React" }, { stackName: "Typescript" }, { stackName: "Vue" }],
        crewInfo: {
          userName: "nextjs-guru",
          userEmail: "nextjs.guru@gmail.com",
          nickName: "NextMaster",
          position: "풀스택 개발자",
          tools: [
            { stackName: "Next.js" },
            { stackName: "React" },
            { stackName: "Typescript" },
            { stackName: "Node.js" },
            { stackName: "MongoDB" },
          ],
          years: 4,
          projectCount: 5,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Nodejs" }, { stackName: "MongoDB" }],
            years: 3,
            expectedRecruitmentDuration: {
              startDate: "2024-08-15T00:00:00.000Z",
              endDate: "2024-09-15T00:00:00.000Z",
            },
          },
        ],
        expectedProjectDuration: {
          startDate: "2024-09-01T00:00:00.000Z",
          endDate: "2025-03-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Vue.js 3 Component Library",
        like: false,
        description:
          "Vue.js 3를 위한 재사용 가능한 컴포넌트 라이브러리를 개발하는 프로젝트입니다. Composition API를 활용하여 효율적이고 유연한 컴포넌트를 만듭니다.",
        tools: [{ stackName: "Vue.js" }, { stackName: "Javascript" }, { stackName: "Jest" }, { stackName: "MongoDB" }],
        crewInfo: {
          userName: "vue-components",
          userEmail: "vue.components@gmail.com",
          nickName: "VueWizard",
          position: "프론트엔드",
          tools: [
            { stackName: "Vue.js" },
            { stackName: "Javascript" },
            { stackName: "Svelte" },
            { stackName: "Webpack" },
          ],
          years: 3,
          projectCount: 8,
        },
        recruitmentInfo: [
          {
            position: "프론트엔드",
            tools: [{ stackName: "Figma" }, { stackName: "Adobe XD" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-09-15T00:00:00.000Z",
              endDate: "2024-10-15T00:00:00.000Z",
            },
          },
        ],
        expectedProjectDuration: {
          startDate: "2024-10-01T00:00:00.000Z",
          endDate: "2025-04-01T00:00:00.000Z",
        },
      },
      {
        projectName: "GraphQL API Gateway",
        like: false,
        description:
          "여러 마이크로서비스를 통합하는 GraphQL API 게이트웨이를 구축하는 프로젝트입니다. 효율적인 데이터 fetching과 실시간 업데이트를 구현합니다.",
        tools: [{ stackName: "GraphQL" }, { stackName: "Nodejs" }],
        crewInfo: {
          userName: "graphql-master",
          userEmail: "graphql.master@gamil.com",
          nickName: "GraphGuru",
          position: "백엔드",
          tools: [
            { stackName: "GraphQL" },
            { stackName: "Nodejs" },
            { stackName: "Apollo Server" },
            { stackName: "PostgreSQL" },
            { stackName: "Docker" },
          ],
          years: 5,
          projectCount: 1,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Docker" }, { stackName: "Kubernetes" }, { stackName: "AWS" }],
            years: 3,
            expectedRecruitmentDuration: {
              startDate: "2024-10-01T00:00:00.000Z",
              endDate: "2024-11-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-11-01T00:00:00.000Z",
          endDate: "2025-05-01T00:00:00.000Z",
        },
      },
      {
        projectName: "React Platform App",
        like: true,
        description:
          "React Platform App은 사용자에게 직관적인 인터페이스와 뛰어난 성능을 제공하는 웹 애플리케이션입니다. 개발자가 쉽게 확장할 수 있도록 설계되었습니다. 실시간 데이터 처리와 API 통합을 통해 복잡한 비즈니스 로직을 효율적으로 구현할 수 있습니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Javascript" },
          { stackName: "Redux" },
          { stackName: "MongoDB" },
          { stackName: "Nodejs" },
        ],
        crewInfo: {
          userName: "react native pro",
          userEmail: "react.native.pro@gmail.com",
          nickName: "MobileWizard",
          position: "모바일 앱 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Javascript" },
            { stackName: "Kotlin" },
            { stackName: "Firebase" },
          ],
          years: 3,
          projectCount: 15,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "React" }, { stackName: "Kotlin" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-11-15T00:00:00.000Z",
              endDate: "2024-12-15T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-12-01T00:00:00.000Z",
          endDate: "2025-06-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Svelte Ecommerce Platform",
        like: false,
        description:
          "Svelte를 활용한 현대적이고 반응성 높은 E-commerce 플랫폼을 개발합니다. 빠른 로딩 시간과 부드러운 사용자 경험을 제공하며, 확장 가능한 아키텍처를 구현합니다. 백엔드와의 원활한 통합을 통해 실시간 재고 관리와 주문 처리 기능을 구현합니다.",
        tools: [
          { stackName: "Svelte" },
          { stackName: "JavaScript" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
        ],
        crewInfo: {
          userName: "svelte-commerce",
          userEmail: "svelte.commerce@gmail.com",
          nickName: "SvelteGuru",
          position: "프론트엔드",
          tools: [
            { stackName: "Svelte" },
            { stackName: "JavaScript" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
          ],
          years: 3,
          projectCount: 25,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Nodejs" }, { stackName: "Express" }, { stackName: "MongoDB" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-08-01T00:00:00.000Z",
              endDate: "2024-09-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-09-01T00:00:00.000Z",
          endDate: "2025-03-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Go Microservices Architecture",
        like: true,
        description:
          "Go 언어를 사용하여 확장 가능하고 효율적인 마이크로서비스 아키텍처를 구축합니다. 고성능 API 게이트웨이를 중심으로 여러 마이크로서비스를 개발하고 통합합니다. Docker와 Kubernetes를 활용하여 배포 및 확장성을 관리하며, 실시간 모니터링 시스템을 구현합니다.",
        tools: [
          { stackName: "Go" },
          { stackName: "Docker" },
          { stackName: "Kubernetes" },
          { stackName: "MySQL" },
          { stackName: "AWS" },
        ],
        crewInfo: {
          userName: "go-microservices",
          userEmail: "go.microservices@gmail.com",
          nickName: "GoArchitect",
          position: "백엔드",
          tools: [
            { stackName: "Go" },
            { stackName: "Docker" },
            { stackName: "Kubernetes" },
            { stackName: "MySQL" },
            { stackName: "AWS" },
          ],
          years: 5,
          projectCount: 8,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Docker" }, { stackName: "Kubernetes" }, { stackName: "AWS" }],
            years: 3,
            expectedRecruitmentDuration: {
              startDate: "2024-09-01T00:00:00.000Z",
              endDate: "2024-10-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-10-01T00:00:00.000Z",
          endDate: "2025-06-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Python Django CMS",
        like: false,
        description:
          "Python Django를 사용하여 강력하고 유연한 콘텐츠 관리 시스템(CMS)을 개발합니다. 사용자 친화적인 관리 인터페이스와 함께 확장 가능한 플러그인 아키텍처를 구현합니다. RESTful API를 통해 다양한 프론트엔드 애플리케이션과의 통합을 지원하며, 고급 콘텐츠 버전 관리 기능을 제공합니다.",
        tools: [
          { stackName: "Python" },
          { stackName: "Django" },
          { stackName: "JavaScript" },
          { stackName: "React" },
          { stackName: "MySQL" },
        ],
        crewInfo: {
          userName: "django-cms-pro",
          userEmail: "django.cms.pro@gmail.com",
          nickName: "DjangoDev",
          position: "풀스택 개발자",
          tools: [
            { stackName: "Python" },
            { stackName: "Django" },
            { stackName: "JavaScript" },
            { stackName: "React" },
            { stackName: "MySQL" },
          ],
          years: 4,
          projectCount: 6,
        },
        recruitmentInfo: [
          {
            position: "프론트엔드",
            tools: [{ stackName: "JavaScript" }, { stackName: "React" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-10-01T00:00:00.000Z",
              endDate: "2024-11-01T00:00:00.000Z",
            },
          },
        ],
        expectedProjectDuration: {
          startDate: "2024-11-01T00:00:00.000Z",
          endDate: "2025-05-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Real Time Chat Application",
        like: false,
        description:
          "React와 Node.js를 사용하여 실시간 채팅 애플리케이션을 개발합니다. WebSocket을 활용하여 사용자 간의 빠르고 원활한 소통을 지원하며, 사용자 인증 및 메시지 저장 기능을 제공합니다. 직관적인 UI 디자인으로 사용자 경험을 극대화합니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Socket.io" },
        ],
        crewInfo: {
          userName: "chat-app-team",
          userEmail: "chat.app.team@example.com",
          nickName: "ChatMaster",
          position: "풀스택 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Socket.io" },
          ],
          years: 3,
          projectCount: 11,
        },
        recruitmentInfo: [
          {
            position: "프론트엔드",
            tools: [{ stackName: "React" }, { stackName: "JavaScript" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2023-12-01T00:00:00.000Z",
              endDate: "2024-01-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-01-01T00:00:00.000Z",
          endDate: "2024-06-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Personal Finance Tracker",
        like: true,
        description:
          "사용자가 자신의 재정을 관리할 수 있도록 돕는 개인 재무 추적 애플리케이션입니다. React와 Node.js를 사용하여 직관적인 대시보드를 제공하며, 사용자는 수입과 지출을 쉽게 기록하고 분석할 수 있습니다. 데이터 시각화를 통해 재정 상태를 한눈에 파악할 수 있습니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "D3.js" },
        ],
        crewInfo: {
          userName: "finance-tracker-team",
          userEmail: "finance.tracker@example.com",
          nickName: "FinanceGuru",
          position: "프론트엔드",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "D3.js" },
          ],
          years: 2,
          projectCount: 3,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Nodejs" }, { stackName: "MongoDB" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-01-01T00:00:00.000Z",
              endDate: "2024-02-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-02-01T00:00:00.000Z",
          endDate: "2024-08-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Online Learning Platform",
        like: false,
        description:
          "학생과 강사가 상호작용할 수 있는 온라인 학습 플랫폼을 구축합니다. 강의 자료 업로드, 실시간 질문 및 답변, 과제 제출 기능을 제공하여 학습 경험을 향상시킵니다. React와 Node.js를 기반으로 하며, 다양한 과목을 지원합니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Socket.io" },
        ],
        crewInfo: {
          userName: "learning-platform-team",
          userEmail: "learning.platform@example.com",
          nickName: "EduTech",
          position: "풀스택 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Socket.io" },
          ],
          years: 4,
          projectCount: 1,
        },
        recruitmentInfo: {
          position: "프론트엔드",
          tools: [{ stackName: "React" }, { stackName: "JavaScript" }],
          years: 2,
          expectedRecruitmentDuration: {
            startDate: "2024-02-01T00:00:00.000Z",
            endDate: "2024-03-01T00:00:00.000Z",
          },
        },

        expectedProjectDuration: {
          startDate: "2024-03-01T00:00:00.000Z",
          endDate: "2024-12-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Recipe Sharing App",
        like: true,
        description:
          "사용자가 요리 레시피를 공유하고 검색할 수 있는 플랫폼입니다. React와 Node.js를 사용하여 사용자 친화적인 인터페이스를 제공하며, 레시피에 대한 평가 및 댓글 기능을 지원합니다. 사용자는 자신의 레시피를 쉽게 등록하고 관리할 수 있습니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Cloudinary" },
        ],
        crewInfo: {
          userName: "recipe-sharing-team",
          userEmail: "recipe.sharing@example.com",
          nickName: "ChefMaster",
          position: "프론트엔드",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Cloudinary" },
          ],
          years: 2,
          projectCount: 2,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Nodejs" }, { stackName: "MongoDB" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-03-01T00:00:00.000Z",
              endDate: "2024-04-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-04-01T00:00:00.000Z",
          endDate: "2024-10-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Fitness Tracker App",
        like: false,
        description:
          "사용자가 자신의 운동 및 식단을 기록할 수 있는 피트니스 트래커 애플리케이션입니다. React와 Node.js를 사용하여 직관적인 대시보드를 제공하며, 사용자는 목표를 설정하고 진행 상황을 추적할 수 있습니다. 데이터 분석 기능을 통해 사용자에게 맞춤형 피드백을 제공합니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Chart.js" },
        ],
        crewInfo: {
          userName: "fitness-tracker-team",
          userEmail: "fitness.tracker@example.com",
          nickName: "FitGuru",
          position: "풀스택 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Chart.js" },
          ],
          years: 3,
          projectCount: 2,
        },
        recruitmentInfo: [
          {
            position: "프론트엔드",
            tools: [{ stackName: "React" }, { stackName: "JavaScript" }, { stackName: "Chart.js" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-04-01T00:00:00.000Z",
              endDate: "2024-05-01T00:00:00.000Z",
            },
          },
        ],
        expectedProjectDuration: {
          startDate: "2024-05-01T00:00:00.000Z",
          endDate: "2024-11-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Travel Blog Platform",
        like: true,
        description:
          "여행자들이 자신의 여행 이야기를 공유할 수 있는 블로그 플랫폼입니다. React와 Node.js를 사용하여 사용자 친화적인 인터페이스를 제공하며, 사용자 간의 소통을 위한 댓글 및 좋아요 기능을 지원합니다. 다양한 여행지에 대한 정보를 제공하여 사용자들에게 영감을 줍니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Cloudinary" },
        ],
        crewInfo: {
          userName: "travel-blog-team",
          userEmail: "travel.blog@example.com",
          nickName: "TravelWriter",
          position: "프론트엔드 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Cloudinary" },
          ],
          years: 2,
          projectCount: 2,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Nodejs" }, { stackName: "MongoDB" }, { stackName: "GraphQL" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-05-01T00:00:00.000Z",
              endDate: "2024-06-01T00:00:00.000Z",
            },
          },
        ],

        expectedProjectDuration: {
          startDate: "2024-06-01T00:00:00.000Z",
          endDate: "2024-12-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Event Management System",
        like: false,
        description:
          "이벤트 관리 시스템은 사용자가 이벤트를 생성하고 관리할 수 있는 플랫폼입니다. React와 Node.js를 사용하여 사용자 친화적인 인터페이스를 제공하며, 참가자 관리 및 티켓 판매 기능을 지원합니다. 실시간 알림 기능을 통해 사용자에게 중요한 정보를 전달합니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Socket.io" },
        ],
        crewInfo: {
          userName: "event-management-team",
          userEmail: "event.management@example.com",
          nickName: "EventOrganizer",
          position: "풀스택 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Socket.io" },
          ],
          years: 4,
          projectCount: 2,
        },
        recruitmentInfo: [
          {
            position: "프론트엔드",
            tools: [{ stackName: "React" }, { stackName: "JavaScript" }, { stackName: "TypeScript" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-06-01T00:00:00.000Z",
              endDate: "2024-07-01T00:00:00.000Z",
            },
          },
        ],
        expectedProjectDuration: {
          startDate: "2024-07-01T00:00:00.000Z",
          endDate: "2025-01-01T00:00:00.000Z",
        },
      },
      {
        projectName: "Portfolio Website Builder",
        like: true,
        description:
          "사용자가 자신의 포트폴리오 웹사이트를 쉽게 만들 수 있도록 돕는 플랫폼입니다. React와 Node.js를 사용하여 사용자 친화적인 인터페이스를 제공하며, 다양한 템플릿과 사용자 정의 기능을 지원합니다. 사용자는 자신의 프로젝트 및 경험을 효과적으로 홍보할 수 있습니다.",
        tools: [
          { stackName: "React" },
          { stackName: "Nodejs" },
          { stackName: "Express" },
          { stackName: "MongoDB" },
          { stackName: "Figma" },
        ],
        crewInfo: {
          userName: "portfolio-builder-team",
          userEmail: "portfolio.builder@example.com",
          nickName: "WebDesigner",
          position: "프론트엔드 개발자",
          tools: [
            { stackName: "React" },
            { stackName: "Nodejs" },
            { stackName: "Express" },
            { stackName: "MongoDB" },
            { stackName: "Figma" },
          ],
          years: 3,
          projectCount: 2,
        },
        recruitmentInfo: [
          {
            position: "백엔드",
            tools: [{ stackName: "Nodejs" }, { stackName: "MongoDB" }, { stackName: "Express" }],
            years: 2,
            expectedRecruitmentDuration: {
              startDate: "2024-07-01T00:00:00.000Z",
              endDate: "2024-08-01T00:00:00.000Z",
            },
          },
        ],
        expectedProjectDuration: {
          startDate: "2024-08-01T00:00:00.000Z",
          endDate: "2025-02-01T00:00:00.000Z",
        },
      },
    ],
  };

  if (!localStorage.getItem("allProjects")) {
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
  }
})();
