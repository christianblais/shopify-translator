if (typeof LANGUAGES === 'undefined') { var LANGUAGES = {} }

LANGUAGES['ja'] = {
  'general': {
    'sections': {
      'home': 'ホーム',
      'orders': '注文管理',
      'drafts': '下書き',
      'checkouts': 'カゴ落ち',
      'products': '商品管理',
      'customers': '顧客管理',
      'reports': 'レポート',
      'discounts': '割引管理',
      'sales-channels': '販売チャネル',
      'channels': 'チャネル',
      'online_store': 'オンラインストア',
      'buy_button': 'Buy Button',
      'mobile_app': "スマホアプリ",
      'pos': "POS",
      'apps': "App管理",
      'settings': "設定",
      'online_preferences': "各種設定",
      'themes': "テーマ",
      'blogs': "ブログ",
      'pages': "ページ",
      'navigation': "メニュー",
      'domains': "ドメイン",
      'inventory': "在庫管理",
      'inventory_transfers': "在庫の移動",
      'collections': "コレクション",
      'gift_cards': "ギフトカード",
      'files': "ファイル",
      'taxes': "税設定",
      'checkout': "決済画面",
      'general': "一般設定",
      'payments': "支払い",
      'shipping': "配送",
      'notifications': "通知",
      'plan': "プラン",
      'account': "アカウント",
    },

    'search': {
      'placeholder': '検索',
    },

    'buttons': {
      'export': 'エクスポート',
      'import': 'インポート',
      'save': '保存',
      'edit': '編集',
      'cancel': 'キャンセル',
      'change': '変更',
      'destroy': "削除",
      'post': '投稿する',
      'filter': 'フィルター'
    }
  },

  'modal': {
    'titles': {
      'capture-payment': "支払いを確定",
    },
  },

  'home-index': {
    'cards': {
      'api_buy_button_create_first_embed_card': '',
      'multi_image_buy_button_announcement_card': '',
    },

    'today-features': {
      "todays-total-sales": "本日の売上",
      "todays-visits": "本日の来訪者数",
      "todays-orders": "本日の注文数",
    },

    'titles': {
      'total-sales': "売上総額",
      'top-products': "売れてる商品",
    },

    'buttons': {
      'all-channels': "Tous les cannaux",
      'online-store': "オンラインストア",
      'view-order': "注文を確認",
      'view-orders': "注文を確認",
      'create-button': "ボタンを作成",
      'create-buy-button': "Buy Buttonを作成",
      'learn-more': "続きを読む"
    }
  },

  'products-index': {
    'table': {
      'tabs': {
        'all-products': "すべての商品",
      },
    },

    'buttons': {
      'add-product': "商品を追加",
    },
  },

  'orders-index': {
    'table': {
      'tabs': {
        'all-orders': "すべての注文",
        'open': "オープンな注文",
        'unfulfilled': "未配送",
        'unpaid': "未払い",
      },

      'columns': {
        'order': '注文',
        'date': '日付',
        'customer': '顧客',
        'payment-status': '支払い状況',
        'fulfillment-status': '配送状況',
        'total': '合計',
      },

      'badges': {
        'fulfilled': '配送済',
        'unfulfilled': '未配送',
        'paid': '支払い済',
        'pending': '保留',
        'refunded': '返金済',
        'authorized': "オーソリ済"
      },
    },

    'filters': {
      'status': "ステータス",
      'credit-card': "クレジットカード",
      'customer': "顧客",
      'payment-status': "支払い状況",
      'fulfillment-status': "配送状況",
      'tagged-with': "付いてるタグ",
      'risk-level': "リスクレベル",
    },

    'buttons': {
      'create-order': "注文を作成",
    },
  },

  'orders-show': {
    'buttons': {
      'print': "印刷",
      'cancel-order': "注文をキャンセル",
      'archive': "アーカイブ",
      'view-order-status-page': "注文ステータスを確認",
      'capture-payment': "支払いを確定",
      'restock': "在庫補充",
      'fulfill-items': "配送済にする",
    },

    'titles': {
      'order-details': '注文詳細',
      'unfulfilled': '未配送',
      'accept-payment': '支払いステータス',
      'fulfill-items': '配送ステータス',
      'risk-level': 'リスクレベル'
    },
  },

  'customers-show': {
    'titles': {
      'recent-orders': "最近の注文",
      'default-address': "デフォルト住所",
      'contact': "問い合わせる",
    },
  },

  'draft-orders-index': {
    'buttons': {
      'create-order': '注文を作成'
    },

    'empty': {
      'title': '注文・請求書の作成',
      'subtitle': '電話で受注し、請求書をメールし、集金できます。'
    }
  },

  'draft': {
    'buttons': {
      'save-draft-order': '下書きとして保存'
    }
  },
}
