import { useEffect, useState } from 'react'
import './index.css'

const GameCard = ({ game, onBuy, onSubscribe, user, isPurchased, isSubscribed }) => {
  const [showSubscription, setShowSubscription] = useState(false)

  // Different images for each game based on name
  const getGameImage = (gameName) => {
    const imageMap = {
      'Cyberpunk 2077': 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaam3.webp',
      'The Witcher 3: Wild Hunt': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Elden Ring': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'Minecraft': 'https://images.igdb.com/igdb/image/upload/t_original/sc8d2m.jpg',
      'Grand Theft Auto V': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co66n7.webp',
      'The Legend of Zelda: Breath of the Wild': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp',
      'Red Dead Redemption 2': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp',
      'Among Us': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6kqt.webp',
      'Valorant': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'Fall Guys': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Hades': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.webp',
      'Stardew Valley': 'https://images.igdb.com/igdb/image/upload/t_cover_big/coa93h.webp',
      'Dead by Daylight': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co9qyw.webp',
      'Rocket League': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Apex Legends': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'It Takes Two': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Hollow Knight': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co93cr.webp',
      'Test Game': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8k4p.webp'
    }
    return imageMap[gameName] || game.imageUrl || 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg'
  }

  const handleBuy = () => {
    onBuy(game)
  }

  const handleSubscribe = (plan) => {
    onSubscribe(game, plan)
  }

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="aspect-video bg-slate-700 flex items-center justify-center">
        <img 
          src={getGameImage(game.name)} 
          alt={game.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className={`w-full h-full flex items-center justify-center text-4xl hidden`}>
          🎮
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{game.name}</h3>
        <p className="text-slate-300 text-sm mb-2 line-clamp-2">{game.description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-400 text-sm bg-slate-700 px-2 py-1 rounded">{game.category}</span>
          <span className="text-slate-400 text-sm">{game.developer}</span>
        </div>
        
        {/* Pricing Section */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-green-400">${game.price}</span>
            <span className="text-slate-400 text-sm">💰 One-time</span>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-2 mb-2">
            <div className="text-xs text-slate-300 mb-1">📱 Or Subscribe:</div>
            <div className="flex justify-between text-xs">
              <span className="text-purple-300">${game.monthlyPrice || (game.price * 0.2).toFixed(2)}/mo</span>
              <span className="text-green-300">${game.sixMonthPrice || (game.price * 0.8).toFixed(2)}/6mo</span>
              <span className="text-yellow-300">${game.annualPrice || (game.price * 1.5).toFixed(2)}/year</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {isPurchased || isSubscribed ? (
            <div className="text-center">
              <span className="text-green-400 text-sm font-medium">
                ✓ {isSubscribed ? 'Subscribed' : 'Owned'}
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={handleBuy}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium text-sm"
              >
                💰 Buy
              </button>
              
              <button 
                onClick={() => setShowSubscription(!showSubscription)}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium text-sm"
              >
                📱 Subscribe
              </button>
            </div>
          )}
        </div>

        {/* Subscription Plans */}
        {showSubscription && (
          <div className="mt-3 pt-3 border-t border-slate-700">
            <div className="mb-3">
              <h4 className="text-white font-semibold text-sm mb-2">Choose Your Plan:</h4>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => handleSubscribe('monthly')}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <span>📅 Monthly</span>
                  <span className="font-bold">${game.monthlyPrice || (game.price * 0.2).toFixed(2)}/mo</span>
                </div>
              </button>
              
              <button
                onClick={() => handleSubscribe('6month')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <span>📆 6 Months</span>
                  <div className="text-right">
                    <div className="font-bold">${game.sixMonthPrice || (game.price * 0.8).toFixed(2)}</div>
                    <div className="text-xs opacity-90">Save ${((game.monthlyPrice || (game.price * 0.2)) * 6 - (game.sixMonthPrice || (game.price * 0.8))).toFixed(2)}</div>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleSubscribe('annual')}
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-3 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                <div className="flex justify-between items-center">
                  <span>⭐ Annual</span>
                  <div className="text-right">
                    <div className="font-bold">${game.annualPrice || (game.price * 1.5).toFixed(2)}</div>
                    <div className="text-xs opacity-90">Save ${((game.monthlyPrice || (game.price * 0.2)) * 12 - (game.annualPrice || (game.price * 1.5))).toFixed(2)}</div>
                  </div>
                </div>
              </button>
            </div>
            
            <div className="mt-3 text-center">
    <button
                onClick={() => setShowSubscription(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                ✕ Close Plans
    </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const WalletModal = ({ isOpen, onClose, walletBalance, onAddMoney }) => {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  const handleAddMoney = (e) => {
    e.preventDefault()
    const numAmount = parseFloat(amount)
    
    if (isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount')
      return
    }
    
    if (numAmount > 10000) {
      setError('Maximum amount is $10,000')
      return
    }
    
    onAddMoney(numAmount)
    setAmount('')
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">💰 Wallet</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="mb-6">
          <div className="bg-slate-700 rounded-lg p-4 text-center">
            <div className="text-slate-400 text-sm">Current Balance</div>
            <div className="text-3xl font-bold text-green-400">${walletBalance.toFixed(2)}</div>
          </div>
        </div>
        
        <form onSubmit={handleAddMoney} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Add Money</label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              max="10000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to add"
              className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}
          
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium"
            >
              Add Money
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const UserStats = ({ user, purchasedGames, allGames, totalSpent, subscriptions }) => {
  const purchasedGamesList = allGames.filter(game => purchasedGames.has(game.id))
  const totalGamesOwned = purchasedGamesList.length + subscriptions.length

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Games Owned</p>
            <p className="text-3xl font-bold text-white">{totalGamesOwned}</p>
          </div>
          <div className="text-4xl">🎮</div>
        </div>
      </div>
      
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Total Spent</p>
            <p className="text-3xl font-bold text-green-400">${totalSpent.toFixed(2)}</p>
          </div>
          <div className="text-4xl">💰</div>
        </div>
      </div>
      
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Active Subscriptions</p>
            <p className="text-3xl font-bold text-purple-400">{subscriptions.length}</p>
          </div>
          <div className="text-4xl">📱</div>
        </div>
      </div>
    </div>
  )
}

const PurchasedGames = ({ purchasedGames, allGames }) => {
  const purchasedGamesList = allGames.filter(game => purchasedGames.has(game.id))
  
  // Different images for each game based on name
  const getGameImage = (gameName) => {
    const imageMap = {
      'Cyberpunk 2077': 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaam3.webp',
      'The Witcher 3: Wild Hunt': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Elden Ring': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'Minecraft': 'https://images.igdb.com/igdb/image/upload/t_original/sc8d2m.jpg',
      'Grand Theft Auto V': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co66n7.webp',
      'The Legend of Zelda: Breath of the Wild': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp',
      'Red Dead Redemption 2': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp',
      'Among Us': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6kqt.webp',
      'Valorant': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'Fall Guys': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Hades': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.webp',
      'Stardew Valley': 'https://images.igdb.com/igdb/image/upload/t_cover_big/coa93h.webp',
      'Dead by Daylight': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co9qyw.webp',
      'Rocket League': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Apex Legends': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'It Takes Two': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Hollow Knight': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co93cr.webp',
      'Test Game': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8k4p.webp'
    }
    return imageMap[gameName] || game.imageUrl || 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg'
  }
  
  if (purchasedGamesList.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">🎮</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Games Purchased Yet</h3>
        <p className="text-slate-400">Start shopping to build your game library!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {purchasedGamesList.map(game => (
        <div key={game.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video bg-slate-700 flex items-center justify-center">
            <img 
              src={getGameImage(game.name)} 
              alt={game.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className={`w-full h-full flex items-center justify-center text-4xl hidden`}>
              🎮
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{game.name}</h3>
            <p className="text-slate-300 text-sm mb-2 line-clamp-2">{game.description}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400 text-sm bg-slate-700 px-2 py-1 rounded">{game.category}</span>
              <span className="text-slate-400 text-sm">{game.developer}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-400">${game.price}</span>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm">✓ Owned</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const SubscribedGames = ({ subscriptions, allGames }) => {
  const subscribedGamesList = subscriptions.map(subscription => {
    const game = allGames.find(g => g.id === subscription.gameId)
    return game ? { ...game, subscription } : null
  }).filter(Boolean)
  
  // Different images for each game based on name
  const getGameImage = (gameName) => {
    const imageMap = {
      'Cyberpunk 2077': 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaam3.webp',
      'The Witcher 3: Wild Hunt': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Elden Ring': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'Minecraft': 'https://images.igdb.com/igdb/image/upload/t_original/sc8d2m.jpg',
      'Grand Theft Auto V': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co66n7.webp',
      'The Legend of Zelda: Breath of the Wild': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp',
      'Red Dead Redemption 2': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp',
      'Among Us': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6kqt.webp',
      'Valorant': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'Fall Guys': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Hades': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co39vc.webp',
      'Stardew Valley': 'https://images.igdb.com/igdb/image/upload/t_cover_big/coa93h.webp',
      'Dead by Daylight': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co9qyw.webp',
      'Rocket League': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Apex Legends': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rpf.jpg',
      'It Takes Two': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
      'Hollow Knight': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co93cr.webp',
      'Test Game': 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8k4p.webp'
    }
    return imageMap[gameName] || game.imageUrl || 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg'
  }
  
  if (subscribedGamesList.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">📱</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Active Subscriptions</h3>
        <p className="text-slate-400">Subscribe to games to see them here!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {subscribedGamesList.map(game => (
        <div key={game.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border-2 border-purple-500">
          <div className="aspect-video bg-slate-700 flex items-center justify-center">
            <img 
              src={getGameImage(game.name)} 
              alt={game.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className={`w-full h-full flex items-center justify-center text-4xl hidden`}>
              🎮
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{game.name}</h3>
            <p className="text-slate-300 text-sm mb-2 line-clamp-2">{game.description}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400 text-sm bg-slate-700 px-2 py-1 rounded">{game.category}</span>
              <span className="text-slate-400 text-sm">{game.developer}</span>
            </div>
            
            {/* Subscription Info */}
            <div className="bg-purple-900 bg-opacity-30 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 text-sm font-medium">📱 {game.subscription.plan} Plan</span>
                <span className="text-purple-400 text-sm">${game.subscription.price}</span>
              </div>
              <div className="text-xs text-slate-400">
                <div>Start: {new Date(game.subscription.startDate).toLocaleDateString()}</div>
                <div>Ends: {new Date(game.subscription.endDate).toLocaleDateString()}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-400">Subscribed</span>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-sm">✓ Active</span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm">
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const UserAuth = ({ onLogin, onRegister }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (isLogin) {
      if (formData.username.trim() && formData.password.trim()) {
        onLogin({ 
          username: formData.username.trim(), 
          password: formData.password.trim() 
        })
      } else {
        setError('Please fill in all fields')
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        return
      }
      if (formData.username.trim() && formData.email.trim() && formData.password.trim()) {
        onRegister({ 
          username: formData.username.trim(), 
          email: formData.email.trim(),
          password: formData.password.trim()
        })
      } else {
        setError('Please fill in all fields')
      }
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError('')
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">🎮 Game Store</h1>
          <p className="text-slate-400">
            {isLogin ? 'Welcome back! Please sign in' : 'Create your account to start shopping'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              placeholder="Enter your username"
              className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
                className="w-full bg-slate-700 border border-slate-600 rounded px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-medium transition-colors"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="text-center">
    <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setFormData({ username: '', email: '', password: '', confirmPassword: '' })
                setError('')
              }}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
    </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [developerFilter, setDeveloperFilter] = useState('')
  const [purchasedGames, setPurchasedGames] = useState(new Set())
  const [cart, setCart] = useState([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [users, setUsers] = useState([]) // Local user storage
  const [walletBalance, setWalletBalance] = useState(0)
  const [showWallet, setShowWallet] = useState(false)
  const [currentTab, setCurrentTab] = useState('store') // 'store' or 'library'
  const [subscriptions, setSubscriptions] = useState([])
  const [totalSpent, setTotalSpent] = useState(0)

  const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8080'

  const handleLogin = (userData) => {
    // Check if user exists
    const existingUsers = JSON.parse(localStorage.getItem('gameStoreUsers') || '[]')
    const foundUser = existingUsers.find(u => 
      u.username === userData.username && u.password === userData.password
    )
    
    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem('gameStoreUser', JSON.stringify(foundUser))
      // Load user's purchase history
      const userPurchases = JSON.parse(localStorage.getItem(`userPurchases_${foundUser.username}`) || '[]')
      setPurchasedGames(new Set(userPurchases))
      // Load user's wallet balance
      const userWallet = parseFloat(localStorage.getItem(`userWallet_${foundUser.username}`) || '0')
      setWalletBalance(userWallet)
      // Load user's subscriptions
      const userSubscriptions = JSON.parse(localStorage.getItem(`userSubscriptions_${foundUser.username}`) || '[]')
      setSubscriptions(userSubscriptions)
      // Load user's total spent
      const userTotalSpent = parseFloat(localStorage.getItem(`userTotalSpent_${foundUser.username}`) || '0')
      setTotalSpent(userTotalSpent)
    } else {
      setError('Invalid username or password')
    }
  }

  const handleRegister = (userData) => {
    const existingUsers = JSON.parse(localStorage.getItem('gameStoreUsers') || '[]')
    
    // Check if user already exists
    if (existingUsers.find(u => u.username === userData.username)) {
      setError('Username already exists')
      return
    }
    
    if (existingUsers.find(u => u.email === userData.email)) {
      setError('Email already registered')
      return
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      username: userData.username,
      email: userData.email,
      password: userData.password,
      joinDate: new Date().toISOString()
    }
    
    const updatedUsers = [...existingUsers, newUser]
    localStorage.setItem('gameStoreUsers', JSON.stringify(updatedUsers))
    
    setUser(newUser)
    localStorage.setItem('gameStoreUser', JSON.stringify(newUser))
    // Initialize wallet with $0
    setWalletBalance(0)
    localStorage.setItem(`userWallet_${newUser.username}`, '0')
    setError('')
  }

  const handleAddMoney = (amount) => {
    const newBalance = walletBalance + amount
    setWalletBalance(newBalance)
    localStorage.setItem(`userWallet_${user.username}`, newBalance.toString())
    alert(`💰 $${amount.toFixed(2)} added to your wallet! New balance: $${newBalance.toFixed(2)}`)
  }

  const handleSubscribe = (game, plan) => {
    let price = 0
    let planName = ''
    
    switch(plan) {
      case 'monthly':
        price = game.monthlyPrice || (game.price * 0.2)
        planName = 'Monthly'
        break
      case '6month':
        price = game.sixMonthPrice || (game.price * 0.8)
        planName = '6 Months'
        break
      case 'annual':
        price = game.annualPrice || (game.price * 1.5)
        planName = 'Annual'
        break
    }
    
    if (walletBalance < price) {
      alert(`❌ Insufficient funds! You need $${price.toFixed(2)} but only have $${walletBalance.toFixed(2)} in your wallet.`)
      return
    }
    
    // Process subscription
    const newBalance = walletBalance - price
    setWalletBalance(newBalance)
    localStorage.setItem(`userWallet_${user.username}`, newBalance.toString())
    
    // Add to subscriptions
    const newSubscription = {
      gameId: game.id,
      gameName: game.name,
      plan: planName,
      price: price,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + (plan === 'monthly' ? 30 : plan === '6month' ? 180 : 365) * 24 * 60 * 60 * 1000).toISOString()
    }
    
    const updatedSubscriptions = [...subscriptions, newSubscription]
    setSubscriptions(updatedSubscriptions)
    localStorage.setItem(`userSubscriptions_${user.username}`, JSON.stringify(updatedSubscriptions))
    
    // Update total spent
    const newTotalSpent = totalSpent + price
    setTotalSpent(newTotalSpent)
    localStorage.setItem(`userTotalSpent_${user.username}`, newTotalSpent.toString())
    
    alert(`🎉 Subscription successful! You've subscribed to ${game.name} (${planName}) for $${price.toFixed(2)}. Remaining balance: $${newBalance.toFixed(2)}`)
  }

  const handleLogout = () => {
    // Clear all user-specific state
    setUser(null)
    setPurchasedGames(new Set())
    setCart([])
    setShowCheckout(false)
    setWalletBalance(0)
    setSubscriptions([])
    setTotalSpent(0)
    setError('')
    
    // Clear all user-specific localStorage data
    localStorage.removeItem('gameStoreUser')
  }

  const fetchGames = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${apiBase}/api/games`)
      if (!response.ok) throw new Error('Failed to fetch games')
      const data = await response.json()
      setGames(data.data || [])
    } catch (err) {
      setError('Failed to load games')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const searchGames = async () => {
    try {
      setLoading(true)
      // Get all games first
      const response = await fetch(`${apiBase}/api/games`)
      if (!response.ok) throw new Error('Failed to fetch games')
      const data = await response.json()
      const allGames = data.data || []
      
      // Apply client-side filtering
      let filteredGames = allGames
      
      if (searchTerm) {
        filteredGames = filteredGames.filter(game => 
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }
      
      if (categoryFilter) {
        filteredGames = filteredGames.filter(game => 
          game.category && game.category.toLowerCase() === categoryFilter.toLowerCase()
        )
      }
      
      if (developerFilter) {
        filteredGames = filteredGames.filter(game => 
          game.developer && game.developer.toLowerCase().includes(developerFilter.toLowerCase())
        )
      }
      
      setGames(filteredGames)
    } catch (err) {
      setError('Failed to search games')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleBuyGame = (game) => {
    if (purchasedGames.has(game.id)) {
      alert('You already own this game!')
      return
    }
    
    // Add to cart
    setCart(prev => [...prev, game])
    alert(`${game.name} added to cart!`)
  }

  const removeFromCart = (gameId) => {
    setCart(prev => prev.filter(game => game.id !== gameId))
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    
    // Calculate total
    const total = cart.reduce((sum, game) => sum + game.price, 0)
    
    // Check if user has enough money
    if (walletBalance < total) {
      alert(`❌ Insufficient funds! You need $${total.toFixed(2)} but only have $${walletBalance.toFixed(2)} in your wallet.`)
      return
    }
    
    // Process purchase
    const newPurchases = [...purchasedGames, ...cart.map(game => game.id)]
    setPurchasedGames(new Set(newPurchases))
    
    // Update wallet balance
    const newBalance = walletBalance - total
    setWalletBalance(newBalance)
    localStorage.setItem(`userWallet_${user.username}`, newBalance.toString())
    
    // Update total spent
    const newTotalSpent = totalSpent + total
    setTotalSpent(newTotalSpent)
    localStorage.setItem(`userTotalSpent_${user.username}`, newTotalSpent.toString())
    
    // Save purchase history
    localStorage.setItem(`userPurchases_${user.username}`, JSON.stringify([...newPurchases]))
    
    // Show success message
    alert(`🎉 Purchase successful! You've bought ${cart.length} game(s) for $${total.toFixed(2)}. Remaining balance: $${newBalance.toFixed(2)}`)
    
    // Clear cart
    setCart([])
    setShowCheckout(false)
  }

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('gameStoreUser')
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
      
      // Load all user-specific data
      const userPurchases = JSON.parse(localStorage.getItem(`userPurchases_${userData.username}`) || '[]')
      setPurchasedGames(new Set(userPurchases))
      
      const userWallet = parseFloat(localStorage.getItem(`userWallet_${userData.username}`) || '0')
      setWalletBalance(userWallet)
      
      const userSubscriptions = JSON.parse(localStorage.getItem(`userSubscriptions_${userData.username}`) || '[]')
      setSubscriptions(userSubscriptions)
      
      const userTotalSpent = parseFloat(localStorage.getItem(`userTotalSpent_${userData.username}`) || '0')
      setTotalSpent(userTotalSpent)
    }
    fetchGames()
  }, [])

  useEffect(() => {
    if (searchTerm || categoryFilter || developerFilter) {
      searchGames()
    } else {
      fetchGames()
    }
  }, [searchTerm, categoryFilter, developerFilter])

  const categories = [...new Set(games.map(game => game.category).filter(Boolean))]
  const developers = [...new Set(games.map(game => game.developer).filter(Boolean))]
  const totalCartValue = cart.reduce((sum, game) => sum + game.price, 0)

  // Show login screen if user is not logged in
  if (!user) {
    return <UserAuth onLogin={handleLogin} onRegister={handleRegister} />
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">🎮 Game Store</h1>
            <p className="text-slate-400">Welcome back, {user.username}!</p>
          </div>
        <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-slate-400">Wallet Balance</div>
              <div className="text-lg font-semibold text-green-400">${walletBalance.toFixed(2)}</div>
            </div>
            <button
              onClick={() => setShowWallet(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              💰 Wallet
            </button>
            <div className="text-right">
              <div className="text-sm text-slate-400">Cart ({cart.length})</div>
              <div className="text-lg font-semibold text-green-400">${totalCartValue.toFixed(2)}</div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setCurrentTab('store')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentTab === 'store'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            🛒 Game Store
          </button>
          <button
            onClick={() => setCurrentTab('library')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentTab === 'library'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            📚 My Library
          </button>
        </div>

        {currentTab === 'store' && (
          <>
            {/* Search and Filters */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search by Name</label>
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Developer</label>
                  <select
                    value={developerFilter}
                    onChange={(e) => setDeveloperFilter(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Developers</option>
                    {developers.map(developer => (
                      <option key={developer} value={developer}>{developer}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setCategoryFilter('')
                      setDeveloperFilter('')
                    }}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded font-medium transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
            {error}
            <button 
              onClick={() => setError('')}
              className="float-right text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="text-2xl">Loading games...</div>
            </div>
        )}

        {/* Store Content */}
        {currentTab === 'store' && (
          <>
            {/* Games Grid */}
            {!loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {games.map(game => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onBuy={handleBuyGame}
                    onSubscribe={handleSubscribe}
                    user={user}
                    isPurchased={purchasedGames.has(game.id)}
                    isSubscribed={subscriptions.some(sub => sub.gameId === game.id)}
                  />
          ))}
        </div>
            )}

            {/* No Games Message */}
            {!loading && games.length === 0 && (
              <div className="text-center py-12">
                <div className="text-2xl text-gray-400 mb-4">No games found</div>
                <p className="text-slate-500">Try adjusting your search filters</p>
              </div>
            )}
          </>
        )}

        {/* Library Content */}
        {currentTab === 'library' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">📚 My Game Library</h2>
              <p className="text-slate-400">Your purchased games and subscriptions</p>
            </div>
            
            {/* User Statistics */}
            <UserStats 
              user={user}
              purchasedGames={purchasedGames}
              allGames={games}
              totalSpent={totalSpent}
              subscriptions={subscriptions}
            />
            
            {/* Purchased Games Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-white">🎮 Purchased Games</h3>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm">
                  {purchasedGames.size}
                </span>
              </div>
              <PurchasedGames purchasedGames={purchasedGames} allGames={games} />
            </div>
            
            {/* Subscribed Games Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-white">📱 Subscribed Games</h3>
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                  {subscriptions.length}
                </span>
              </div>
              <SubscribedGames subscriptions={subscriptions} allGames={games} />
            </div>
                </div>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-slate-800 rounded-lg p-4 shadow-xl border border-slate-700 max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Your Cart ({cart.length})</h3>
              <button 
                onClick={() => setShowCheckout(!showCheckout)}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                {showCheckout ? 'Hide' : 'View'}
              </button>
            </div>
            
            {showCheckout && (
              <div className="space-y-2 max-h-40 overflow-y-auto mb-3">
                {cart.map((game, index) => (
                  <div key={index} className="flex justify-between items-center text-sm bg-slate-700 p-2 rounded">
                    <span className="text-slate-300 truncate">{game.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">${game.price}</span>
                      <button 
                        onClick={() => removeFromCart(game.id)}
                        className="text-red-400 hover:text-red-300 text-xs"
                      >
                        ✕
                      </button>
          </div>
                </div>
              ))}
              </div>
            )}
            
            <div className="border-t border-slate-700 pt-2">
              <div className="flex justify-between items-center font-semibold mb-2">
                <span>Total:</span>
                <span className="text-green-400">${totalCartValue.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium"
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}

        {/* Wallet Modal */}
        <WalletModal
          isOpen={showWallet}
          onClose={() => setShowWallet(false)}
          walletBalance={walletBalance}
          onAddMoney={handleAddMoney}
        />
      </div>
    </div>
  )
}

export default App