import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">新石器</span>
            <br />
            <span className="text-white">产业与教育融合平台</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            专注无人车产业与教育深度融合，打造数据看板、人员培训认证、需求互动、生态体系四大核心板块
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/dashboard"
              className="btn-primary px-8 py-4 rounded-lg font-medium text-white text-lg"
            >
              查看数据看板
            </Link>
            <Link
              to="/training"
              className="px-8 py-4 rounded-lg font-medium text-white border border-primary/30 hover:bg-primary/20 transition-all duration-300 text-lg"
            >
              开始培训认证
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">核心板块</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📊',
                title: '数据看板',
                description: '实时展示各省份合作院校数据，直观呈现合作深度与人才培养成效',
                path: '/dashboard'
              },
              {
                icon: '🎓',
                title: '培训认证',
                description: '为企业输送优质人才，提升从业人员专业能力与就业竞争力',
                path: '/training'
              },
              {
                icon: '💬',
                title: '需求互动',
                description: '专属代理商留言通道，实现需求提交与双向互动沟通',
                path: '/interaction'
              },
              {
                icon: '🌐',
                title: '生态板块',
                description: '构建完整产业生态，推动无人车产业与教育协同发展',
                path: '/ecosystem'
              }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="card-gradient rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">平台优势</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '产业与教育深度融合',
                description: '以产业需求为导向，通过教育培养优质人才反哺产业升级，实现双向赋能'
              },
              {
                title: '数据驱动决策',
                description: '基于实时数据看板，为合作院校、企业提供精准的人才培养与招聘参考'
              },
              {
                title: '全链条人才培养',
                description: '覆盖在校学生到社会人员全生命周期，实现从学习到就业的无缝衔接'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-darker py-8 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 无人车产业与教育融合平台. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
