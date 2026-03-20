import React, { useState } from 'react'

const Ecosystem = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const ecosystemData = [
    {
      id: 1,
      title: '无人车公众化推广',
      icon: '🚗',
      description: '通过科普宣传、体验活动等方式，让公众了解无人车技术，推动无人车走进日常生活',
      color: 'from-blue-500 to-cyan-500',
      metrics: [
        { label: '覆盖城市', value: '50+' },
        { label: '参与人数', value: '10万+' },
        { label: '媒体曝光', value: '500+' }
      ]
    },
    {
      id: 2,
      title: '无人车改造',
      icon: '🔧',
      description: '提供无人车改装服务，为传统车辆配备智能驾驶系统，实现智能化升级',
      color: 'from-purple-500 to-pink-500',
      metrics: [
        { label: '改造案例', value: '200+' },
        { label: '服务车型', value: '30+' },
        { label: '客户满意度', value: '98%' }
      ]
    },
    {
      id: 3,
      title: '教学体系搭建',
      icon: '📚',
      description: '构建完整的无人车教育体系，从基础理论到实战应用，培养专业人才',
      color: 'from-green-500 to-emerald-500',
      metrics: [
        { label: '合作院校', value: '100+' },
        { label: '课程体系', value: '50+' },
        { label: '认证学员', value: '5000+' }
      ]
    },
    {
      id: 4,
      title: '人才培养体系完善',
      icon: '👨‍🎓',
      description: '建立从培训到就业的全链条人才培养体系，实现教育产业与人才需求无缝对接',
      color: 'from-orange-500 to-red-500',
      metrics: [
        { label: '输送人才', value: '3000+' },
        { label: '就业率', value: '95%' },
        { label: '合作企业', value: '200+' }
      ]
    },
    {
      id: 5,
      title: '市场推广',
      icon: '📢',
      description: '整合线上线下资源，开展全方位市场推广，提升品牌影响力与市场占有率',
      color: 'from-pink-500 to-rose-500',
      metrics: [
        { label: '品牌曝光', value: '1亿+' },
        { label: '代理商数量', value: '100+' },
        { label: '市场份额', value: '30%' }
      ]
    },
    {
      id: 6,
      title: '本地化服务',
      icon: '🌏',
      description: '在各地区建立本地化服务中心，提供及时、高效的本地化支持与服务',
      color: 'from-indigo-500 to-purple-500',
      metrics: [
        { label: '服务网点', value: '80+' },
        { label: '覆盖省份', value: '25' },
        { label: '响应时间', value: '<2小时' }
      ]
    },
    {
      id: 7,
      title: '运营服务',
      icon: '⚡',
      description: '为无人车运营提供全方位支持，包括运维管理、技术支持、数据分析等',
      color: 'from-teal-500 to-cyan-500',
      metrics: [
        { label: '运营车辆', value: '1000+' },
        { label: '运营里程', value: '500万+' },
        { label: '客户留存', value: '92%' }
      ]
    }
  ]

  const partners = [
    { name: '清华大学', type: '高校', logo: '🎓' },
    { name: '百度Apollo', type: '技术合作', logo: '🤝' },
    { name: '华为', type: '战略合作', logo: '🔗' },
    { name: '中国移动', type: '通信支持', logo: '📡' },
    { name: '上海交通大学', type: '高校', logo: '🎓' },
    { name: '美团', type: '应用场景', logo: '🛵' },
    { name: '京东物流', type: '物流合作', logo: '📦' },
    { name: '顺丰速运', type: '物流合作', logo: '🚚' }
  ]

  const milestones = [
    { year: '2020', title: '公司成立', description: '公司成立，开始探索无人车产业' },
    { year: '2021', title: '首批合作', description: '与清华大学、上海交通大学等高校建立合作关系' },
    { year: '2022', title: '教育拓展', description: '启动人才培养计划，建立实训基地' },
    { year: '2023', title: '生态建设', description: '构建完整的产业生态体系' },
    { year: '2024', title: '全国覆盖', description: '业务覆盖全国主要城市，合作院校超100所' },
    { year: '2025', title: '生态完善', description: '产业与教育深度融合，生态价值显现' }
  ]

  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 gradient-text">生态板块</h1>
        <p className="text-gray-400 mb-8">以无人车产业为核心，拉动教育产业发展，实现产业与教育深度融合</p>

        <div className="card-gradient rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">生态体系概述</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">核心逻辑</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">产业基础</h4>
                    <p className="text-gray-400 text-sm">以现有无人车产业为核心，提供技术支撑与应用场景</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">教育拉动</h4>
                    <p className="text-gray-400 text-sm">通过教育培养优质人才，为产业输送人力蓄水池</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">人才反哺</h4>
                    <p className="text-gray-400 text-sm">优质人才促进产业升级，形成良性循环</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">生态价值</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-bold">产业升级</h4>
                    <p className="text-gray-400 text-sm">通过教育赋能，推动无人车产业高质量发展</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📈</div>
                  <div>
                    <h4 className="font-bold">人才就业</h4>
                    <p className="text-gray-400 text-sm">为学生和社会人员提供就业机会，提升就业率</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <h4 className="font-bold">双向赋能</h4>
                    <p className="text-gray-400 text-sm">产业与教育相互促进，实现可持续发展</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🌐</div>
                  <div>
                    <h4 className="font-bold">生态闭环</h4>
                    <p className="text-gray-400 text-sm">构建完整的无人车产业教育生态体系</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">七大核心板块</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemData.map((item) => (
              <div key={item.id} className="card-gradient rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-primary/20">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">发展历程</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-dark"></div>
                  <div className="card-gradient rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold gradient-text">{milestone.year}</span>
                      <span className="text-sm text-gray-400">第 {index + 1} 阶段</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">合作伙伴</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="card-gradient rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h3 className="text-lg font-bold mb-1">{partner.name}</h3>
                <p className="text-gray-400 text-xs">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-gradient rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">生态愿景</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-2">成为行业标杆</h3>
              <p className="text-gray-400 text-sm">引领无人车产业与教育融合发展方向</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌏</div>
              <h3 className="text-lg font-bold mb-2">服务全国市场</h3>
              <p className="text-gray-400 text-sm">覆盖全国主要城市，服务更多客户</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2">持续创新发展</h3>
              <p className="text-gray-400 text-sm">保持技术领先，推动行业进步</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecosystem
