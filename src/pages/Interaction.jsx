import React, { useState } from 'react'

const Interaction = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    type: 'demand',
    content: ''
  })
  const [submittedMessages, setSubmittedMessages] = useState([
    {
      id: 1,
      name: '张三',
      company: '某某科技有限公司',
      type: 'demand',
      content: '希望能了解无人车运维的详细培训方案',
      time: '2025-01-15 14:30'
    },
    {
      id: 2,
      name: '李四',
      company: '智慧交通有限公司',
      type: 'feedback',
      content: '现有的培训课程非常实用，希望能增加更多实操环节',
      time: '2025-01-14 10:20'
    }
  ])
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      id: submittedMessages.length + 1,
      ...formData,
      time: new Date().toLocaleString('zh-CN')
    }
    setSubmittedMessages([newMessage, ...submittedMessages])
    setShowSuccess(true)
    setFormData({ name: '', company: '', contact: '', type: 'demand', content: '' })
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const typeLabels = {
    demand: { label: '需求提交', color: 'bg-blue-500/20 text-blue-400' },
    feedback: { label: '意见反馈', color: 'bg-green-500/20 text-green-400' },
    inquiry: { label: '咨询事宜', color: 'bg-purple-500/20 text-purple-400' }
  }

  const faqs = [
    {
      question: '如何成为代理商？',
      answer: '联系我们提交申请，经审核后即可成为代理商，享受专属权益与支持。'
    },
    {
      question: '培训认证费用如何计算？',
      answer: '根据培训模块和认证等级不同，费用有所差异。具体可咨询客服或查看培训详情。'
    },
    {
      question: '实训基地的培训周期是多长？',
      answer: '基础培训为3-4周，中级培训6-8周，高级培训10-12周，具体根据课程安排调整。'
    },
    {
      question: '社会人员如何申请岗位？',
      answer: '社会人员可在培训页面"社会人员"板块直接申请，或通过就近申请通道提交信息。'
    }
  ]

  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 gradient-text">需求侧互动</h1>
        <p className="text-gray-400 mb-8">专属代理商通道，需求提交与双向互动</p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="card-gradient rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">提交留言</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">姓名 *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">公司名称 *</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入公司名称"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">联系方式 *</label>
                <input
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入手机或邮箱"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">留言类型 *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="demand">需求提交</option>
                  <option value="feedback">意见反馈</option>
                  <option value="inquiry">咨询事宜</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">留言内容 *</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="请详细描述您的需求或反馈"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-lg text-white font-medium"
              >
                提交留言
              </button>
            </form>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center animate-pulse">
                ✓ 留言提交成功，我们将尽快回复您！
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">常见问题</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card-gradient rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-2 text-white">{faq.question}</h3>
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">留言记录</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {submittedMessages.map((message) => (
              <div key={message.id} className="card-gradient rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{message.name}</h3>
                    <p className="text-gray-400 text-sm">{message.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${typeLabels[message.type].color}`}>
                    {typeLabels[message.type].label}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{message.content}</p>
                <div className="text-xs text-gray-500">{message.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-gradient rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">联系我们</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📞
              </div>
              <h3 className="text-lg font-bold mb-2">电话咨询</h3>
              <p className="text-gray-400">400-888-8888</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📧
              </div>
              <h3 className="text-lg font-bold mb-2">邮件联系</h3>
              <p className="text-gray-400">contact@neolink.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📍
              </div>
              <h3 className="text-lg font-bold mb-2">公司地址</h3>
              <p className="text-gray-400">北京市海淀区中关村</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interaction
