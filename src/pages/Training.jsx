import React, { useState } from 'react'

const Training = ({ isLoggedIn, setShowLogin }) => {
  const [activeTab, setActiveTab] = useState('student')
  const [showJobForm, setShowJobForm] = useState(false)

  const handleTabChange = (tab) => {
    if ((tab === 'resources' || tab === 'certification') && !isLoggedIn) {
      setShowLogin(true)
      return
    }
    setActiveTab(tab)
  }

  const trainingModules = [
    {
      id: 1,
      title: '无人车基础运维',
      duration: '4周',
      difficulty: '初级',
      students: 1250,
      color: 'from-blue-500 to-cyan-500',
      skills: ['车辆保养', '故障诊断', '日常巡检']
    },
    {
      id: 2,
      title: '无人车系统开发',
      duration: '8周',
      difficulty: '中级',
      students: 860,
      color: 'from-purple-500 to-pink-500',
      skills: ['算法设计', '系统集成', '测试验证']
    },
    {
      id: 3,
      title: '无人车市场营销',
      duration: '3周',
      difficulty: '初级',
      students: 540,
      color: 'from-green-500 to-emerald-500',
      skills: ['客户开发', '方案设计', '商务谈判']
    },
    {
      id: 4,
      title: '高级自动驾驶技术',
      duration: '12周',
      difficulty: '高级',
      students: 320,
      color: 'from-orange-500 to-red-500',
      skills: ['深度学习', '路径规划', '安全系统']
    }
  ]

  const certificationLevels = [
    {
      level: '初级认证',
      description: '掌握无人车基础操作与日常维护',
      requirements: '完成初级培训模块',
      certificate: '无人车运维师（初级）'
    },
    {
      level: '中级认证',
      description: '具备无人车系统开发与故障处理能力',
      requirements: '完成中级培训模块 + 通过考试',
      certificate: '无人车工程师（中级）'
    },
    {
      level: '高级认证',
      description: '掌握无人车核心技术与系统架构',
      requirements: '完成高级培训模块 + 项目实战',
      certificate: '无人车技术专家（高级）'
    }
  ]

  const trainingBases = [
    {
      name: '北京实训基地',
      location: '北京市海淀区',
      capacity: 200,
      status: '运行中',
      courses: ['基础运维', '系统开发']
    },
    {
      name: '上海实训基地',
      location: '上海市浦东新区',
      capacity: 180,
      status: '运行中',
      courses: ['系统开发', '市场营销']
    },
    {
      name: '广州实训基地',
      location: '广州市天河区',
      capacity: 150,
      status: '建设中',
      courses: ['基础运维', '高级技术']
    },
    {
      name: '深圳实训基地',
      location: '深圳市南山区',
      capacity: 120,
      status: '建设中',
      courses: ['高级技术', '系统开发']
    }
  ]

  const jobPositions = [
    { title: '无人车运维工程师', location: '北京', salary: '8K-12K', urgent: true },
    { title: '无人车开发工程师', location: '上海', salary: '15K-25K', urgent: true },
    { title: '无人车销售代表', location: '广州', salary: '6K-10K + 提成', urgent: false },
    { title: '自动驾驶算法工程师', location: '深圳', salary: '25K-40K', urgent: true },
    { title: '无人车技术支持', location: '杭州', salary: '10K-15K', urgent: false },
    { title: '无人车项目经理', location: '南京', salary: '20K-30K', urgent: false }
  ]

  const courseResources = [
    {
      id: 1,
      title: '无人车基础理论',
      description: '涵盖无人车发展历史、核心技术与应用场景',
      locked: true
    },
    {
      id: 2,
      title: '传感器技术详解',
      description: '激光雷达、摄像头、毫米波雷达等传感器原理与应用',
      locked: true
    },
    {
      id: 3,
      title: '自动驾驶算法入门',
      description: '路径规划、目标检测、行为预测等核心算法',
      locked: true
    },
    {
      id: 4,
      title: '车辆系统集成',
      description: '硬件选型、软件架构、系统测试等实战内容',
      locked: true
    }
  ]

  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 gradient-text">人员培训和认证</h1>
        <p className="text-gray-400 mb-8">降低企业运营成本，提升管理水平，助力业务高效推进</p>

        <div className="mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🎯', title: '人力蓄水池', desc: '为企业输送优质人才' },
              { icon: '📈', title: '能力提升', desc: '适配岗位需求，增强竞争力' },
              { icon: '🏭', title: '实训基地', desc: '理论实践相结合' }
            ].map((item, index) => (
              <div key={index} className="card-gradient rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex space-x-2 mb-6">
            {[
              { id: 'student', label: '在校学生' },
              { id: 'social', label: '社会人员' },
              { id: 'resources', label: '课程资源' },
              { id: 'certification', label: '认证体系' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-dark/30 text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'student' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">培训模块</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {trainingModules.map((module) => (
                  <div key={module.id} className="card-gradient rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4`}>
                      <span className="text-white font-bold text-xl">{module.id}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <span>⏱ {module.duration}</span>
                      <span>📊 {module.difficulty}</span>
                      <span>👥 {module.students}人</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-400">核心技能:</div>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6 text-white">实训基地</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {trainingBases.map((base, index) => (
                  <div key={index} className="card-gradient rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold">{base.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        base.status === '运行中' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {base.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div>📍 {base.location}</div>
                      <div>👥 容量: {base.capacity}人</div>
                      <div>📚 课程: {base.courses.join(', ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">就近申请岗位</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {jobPositions.map((job, index) => (
                  <div key={index} className="card-gradient rounded-xl p-6 hover:scale-105 transition-all duration-300 relative">
                    {job.urgent && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                        急聘
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>📍 {job.location}</div>
                      <div>💰 {job.salary}</div>
                    </div>
                    <button
                      onClick={() => setShowJobForm(true)}
                      className="w-full btn-primary py-2 rounded-lg text-white text-sm"
                    >
                      立即申请
                    </button>
                  </div>
                ))}
              </div>

              <div className="card-gradient rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-white">快速申请通道</h3>
                <p className="text-gray-400 mb-6">填写您的信息，我们将为您匹配合适的岗位</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="姓名"
                    className="px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="联系电话"
                    className="px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="期望城市"
                    className="px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <select className="px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors">
                    <option value="">选择意向岗位</option>
                    <option value="maintenance">无人车运维工程师</option>
                    <option value="development">无人车开发工程师</option>
                    <option value="sales">无人车销售代表</option>
                    <option value="algorithm">自动驾驶算法工程师</option>
                  </select>
                </div>
                <textarea
                  placeholder="自我介绍 / 工作经验"
                  rows={3}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors mb-4"
                />
                <button className="w-full btn-primary py-3 rounded-lg text-white font-medium">
                  提交申请
                </button>
              </div>
            </div>
          )}

          {activeTab === 'resources' && !isLoggedIn && (
            <div className="card-gradient rounded-xl p-12 text-center">
              <div className="text-6xl mb-6">🔒</div>
              <h2 className="text-2xl font-bold mb-4 text-white">需要登录访问</h2>
              <p className="text-gray-400 mb-6">课程资源仅供授权用户访问，请登录后查看</p>
              <button
                onClick={() => setShowJobForm(true)}
                className="btn-primary px-8 py-3 rounded-lg text-white"
              >
                立即登录
              </button>
            </div>
          )}

          {activeTab === 'resources' && isLoggedIn && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">课程资源</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {courseResources.map((course) => (
                  <div key={course.id} className="card-gradient rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                    <button className="btn-primary px-6 py-2 rounded-lg text-white text-sm">
                      开始学习
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certification' && !isLoggedIn && (
            <div className="card-gradient rounded-xl p-12 text-center">
              <div className="text-6xl mb-6">🔒</div>
              <h2 className="text-2xl font-bold mb-4 text-white">需要登录访问</h2>
              <p className="text-gray-400 mb-6">认证体系仅供授权用户访问，请登录后查看</p>
              <button
                onClick={() => setShowJobForm(true)}
                className="btn-primary px-8 py-3 rounded-lg text-white"
              >
                立即登录
              </button>
            </div>
          )}

          {activeTab === 'certification' && isLoggedIn && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">认证体系</h2>
              <div className="space-y-6">
                {certificationLevels.map((cert, index) => (
                  <div key={index} className="card-gradient rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{cert.level}</h3>
                        <p className="text-gray-400 text-sm">{cert.description}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${
                        index === 0 ? 'from-blue-500 to-cyan-500' :
                        index === 1 ? 'from-purple-500 to-pink-500' :
                        'from-orange-500 to-red-500'
                      } rounded-full flex items-center justify-center font-bold`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-dark/30 rounded-lg p-4">
                        <div className="text-gray-400 mb-1">认证要求</div>
                        <div className="text-white">{cert.requirements}</div>
                      </div>
                      <div className="bg-dark/30 rounded-lg p-4">
                        <div className="text-gray-400 mb-1">获得证书</div>
                        <div className="text-primary font-medium">{cert.certificate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {showJobForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-darker border border-primary/30 rounded-2xl p-8 w-full max-w-md relative">
            <h2 className="text-2xl font-bold mb-6 gradient-text">请先登录</h2>
            <p className="text-gray-400 mb-6">登录后即可访问课程资源和认证体系</p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="用户名"
                className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="password"
                placeholder="密码"
                className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full btn-primary py-3 rounded-lg text-white font-medium">
                登录
              </button>
            </div>
            <button
              onClick={() => setShowJobForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Training
