import React, { useState, useEffect, useRef } from 'react'
import ReactECharts from 'echarts-for-react'
import chinaMap from '../components/mapData/china.json'
import * as echarts from 'echarts'

const DataDashboard = () => {
  const [selectedProvince, setSelectedProvince] = useState(null)
  const chartRef = useRef(null)

  useEffect(() => {
    echarts.registerMap('china', chinaMap)
  }, [])

  const provinceData = [
    {
      name: '北京市',
      value: 3,
      level: '深度合作',
      schools: ['清华大学', '北京大学', '北京交通大学'],
      students: {
        total: 1250,
        breakdown: { maintenance: 450, development: 520, sales: 280 }
      }
    },
    {
      name: '上海市',
      value: 3,
      level: '深度合作',
      schools: ['复旦大学', '上海交通大学', '同济大学'],
      students: {
        total: 980,
        breakdown: { maintenance: 380, development: 410, sales: 190 }
      }
    },
    {
      name: '广东省',
      value: 3,
      level: '深度合作',
      schools: ['华南理工大学', '中山大学', '深圳大学'],
      students: {
        total: 1560,
        breakdown: { maintenance: 620, development: 650, sales: 290 }
      }
    },
    {
      name: '江苏省',
      value: 2,
      level: '已有合作',
      schools: ['南京大学', '东南大学'],
      students: {
        total: 720,
        breakdown: { maintenance: 280, development: 320, sales: 120 }
      }
    },
    {
      name: '浙江省',
      value: 2,
      level: '已有合作',
      schools: ['浙江大学', '浙江工业大学'],
      students: {
        total: 680,
        breakdown: { maintenance: 250, development: 300, sales: 130 }
      }
    },
    {
      name: '四川省',
      value: 2,
      level: '已有合作',
      schools: ['四川大学', '电子科技大学'],
      students: {
        total: 590,
        breakdown: { maintenance: 220, development: 280, sales: 90 }
      }
    },
    {
      name: '湖北省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '山东省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '河南省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '湖南省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '陕西省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '福建省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '安徽省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '辽宁省',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    },
    {
      name: '重庆市',
      value: 1,
      level: '待合作',
      schools: [],
      students: { total: 0, breakdown: { maintenance: 0, development: 0, sales: 0 } }
    }
  ]

  const mapOption = {
    backgroundColor: 'transparent',
    title: {
      text: '各省份合作院校分布',
      left: 'center',
      textStyle: { color: '#fff', fontSize: 18 }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.value) {
          const data = provinceData.find(p => p.name === params.name)
          if (data) {
            return `
              <div style="padding: 8px;">
                <div style="font-weight: bold; margin-bottom: 5px;">${data.name}</div>
                <div>合作等级: ${data.level}</div>
                <div>合作院校: ${data.schools.length}所</div>
                <div>学生总数: ${data.students.total}人</div>
              </div>
            `
          }
        }
        return params.name
      }
    },
    visualMap: {
      min: 0,
      max: 3,
      left: 'left',
      bottom: '20',
      text: ['深度合作', '待合作'],
      inRange: {
        color: ['#1a1f4e', '#0066FF', '#00D4FF']
      },
      textStyle: { color: '#fff' },
      calculable: true
    },
    series: [
      {
        name: '合作等级',
        type: 'map',
        map: 'china',
        roam: true,
        label: {
          show: true,
          color: '#fff',
          fontSize: 10
        },
        itemStyle: {
          borderColor: '#0066FF',
          borderWidth: 1
        },
        emphasis: {
          label: { show: true, color: '#fff' },
          itemStyle: {
            areaColor: '#00D4FF',
            shadowBlur: 10,
            shadowColor: '#00D4FF'
          }
        },
        data: provinceData.map(p => ({ name: p.name, value: p.value }))
      }
    ]
  }

  const statsCards = [
    {
      title: '合作院校总数',
      value: provinceData.reduce((sum, p) => sum + p.schools.length, 0),
      unit: '所',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '培养学生总数',
      value: provinceData.reduce((sum, p) => sum + p.students.total, 0),
      unit: '人',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '深度合作省份',
      value: provinceData.filter(p => p.value === 3).length,
      unit: '省',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '待开发区域',
      value: provinceData.filter(p => p.value === 1).length,
      unit: '省',
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  const jobTypes = [
    { key: 'maintenance', label: '无人车运维', color: 'bg-blue-500' },
    { key: 'development', label: '无人车开发', color: 'bg-purple-500' },
    { key: 'sales', label: '无人车销售', color: 'bg-green-500' }
  ]

  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 gradient-text">数据看板</h1>
        <p className="text-gray-400 mb-8">实时监测全国各省份合作院校数据</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statsCards.map((card, index) => (
            <div key={index} className="card-gradient rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">{card.title}</div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">{card.value}</span>
                <span className="text-gray-400">{card.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card-gradient rounded-xl p-6 mb-8">
          <ReactECharts
            ref={chartRef}
            option={mapOption}
            style={{ height: '600px' }}
            lazyUpdate={true}
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">合作等级说明</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { level: '待合作', color: 'from-gray-700 to-gray-600', description: '可开发合作区域院校' },
              { level: '已有合作', color: 'from-primary/50 to-secondary/50', description: '已有合作、可深化合作关系院校' },
              { level: '深度合作', color: 'from-secondary/80 to-accent/80', description: '已有深度合作院校' }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-r ${item.color} rounded-xl p-6`}>
                <h3 className="text-xl font-bold mb-2">{item.level}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedProvince && (
          <div className="card-gradient rounded-xl p-6 animate-pulse-glow">
            <h2 className="text-2xl font-bold mb-6 text-white">{selectedProvince.name} 合作详情</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">合作院校</h3>
                {selectedProvince.schools.length > 0 ? (
                  <ul className="space-y-2">
                    {selectedProvince.schools.map((school, index) => (
                      <li key={index} className="bg-dark/30 rounded-lg px-4 py-2 text-gray-300">
                        {school}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">暂无合作院校</p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">学生分布（生产力）</h3>
                {selectedProvince.students.total > 0 ? (
                  <div className="space-y-3">
                    {jobTypes.map((job) => (
                      <div key={job.key}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300">{job.label}</span>
                          <span className="text-white font-medium">
                            {selectedProvince.students.breakdown[job.key]} 人
                          </span>
                        </div>
                        <div className="h-2 bg-dark/30 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${job.color} transition-all duration-500`}
                            style={{
                              width: `${(selectedProvince.students.breakdown[job.key] / selectedProvince.students.total) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">暂无学生数据</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">合作院校列表</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {provinceData.filter(p => p.schools.length > 0).map((province, index) => (
              <div
                key={index}
                onClick={() => setSelectedProvince(province)}
                className="card-gradient rounded-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{province.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    province.value === 3 ? 'bg-secondary/20 text-secondary' :
                    province.value === 2 ? 'bg-primary/20 text-primary' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {province.level}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">合作院校</span>
                    <span className="text-white">{province.schools.length} 所</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">学生总数</span>
                    <span className="text-white">{province.students.total} 人</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataDashboard
