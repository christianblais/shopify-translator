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
      'print': '印刷',
      'save': '保存',
      'duplicate': '複製',
      'edit': '編集',
      'cancel': 'キャンセル',
      'change': '変更',
      'destroy': "削除",
      'post': '投稿する',
      'filter': 'フィルター',
      'deactivate': "無効化",
    }
  },

  'modal': {
    'titles': {
      'capture-payment': "支払いを確定",
    },
  },

  'shared': {
    'customer-card': {
      'customer': '顧客',
      'shipping-address': '配送先住所',
      'billing-address': '請求先住所',
      'no-address-set': '住所が登録されていません。',
      'same-as-shipping-address': "配送先住所と同じ",
      'accepts-marketing': "マーケティングメールを受け付ける",
      'has-an-account': "アカウントあり",
      'no-account': "アカウントなし",
      'contact': "お問い合わせ",
      'view-map': "地図を見る",
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
      "view-summary": "概要を見る",
    },

    'titles': {
      'total-sales': "売上総額",
      'top-products': "売れてる商品",
    },

    'buttons': {
      'all-channels': "全てのチャネル",
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
        'date': '日時',
        'customer': '顧客',
        'payment-status': '支払い状況',
        'fulfillment-status': '配送状況',
        'total': '合計',
      },

      'badges': {
        'fulfilled': '配送済',
        'unfulfilled': '未配送',
        'paid': '支払済',
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
      'resend-email': "メールの再送",
      'mark-as-paid': "支払済にする",
    },

    'titles': {
      'order-details': '注文詳細',
      'conversion-details': 'コンバージョン詳細',
      'unfulfilled': '未配送',
      'accept-payment': '支払いステータス',
      'fulfill-items': '配送ステータス',
      'risk-level': 'リスクレベル',
      'customer': '顧客',
      'tags': 'タグ',
      'order-contact': '問い合わせ先',
      'timeline': 'タイムライン',
      'payment-pending': '支払いペンディング',
    },

    'texts': {
      'show-comments': "コメントを表示",
    },
  },

  'checkouts-index': {
    'table': {
      'tabs': {
        'all-checkouts': "全てのチェックアウト",
      },

      'columns': {
        'checkout': 'チェックアウトID',
        'date': '日時',
        'placed-by': 'ユーザー',
        'email-status': 'メール配信状況',
        'recovery-status': 'リカバリー状況',
        'total': '合計金額',
      },

      'badges': {
        'sent': '配信済',
        'scheduled': '予約済',
        'recovered': 'リカバリー成功',
        'not-recovered': '未リカバー',
        'not-sent': '未配信',
      },
    },
  },

  'checkouts-show': {
    'buttons': {
      'send-a-cart-recovery-email': 'リカバリーメールを配信する'
    },
    'titles': {
      'checkout-details': 'チェックアウト詳細',
      'additional-details': '追加詳細',
      'conversion-details': 'コンバージョン詳細',
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
      'save-draft-order': '下書きとして保存',
      'browse-products': "商品を検索",
      'add-custom-item': "独自アイテムの追加",
      'view-all-tags': "全てのタグを表示",
      'add-discount': "割引を追加",
      'add-shipping': "送料を追加",
      'taxes': "税額",
      'email-invoice': "請求書をメール送信",
      'mark-as-paid': "支払済にする",
      'mark-as-pending': "支払いをペンディングにする",
      'pay-with-credit-card': "クレジットカード決済",
    },

    'titles': {
      'order-details': '注文詳細',
      'find-or-create-a-customer': '顧客の検索／作成',
      'email-invoice': '請求書',
      'accept-payment': '支払いの受付',
      'timeline': 'タイムライン',
      'tags': 'タグ',
    },

    'texts': {
      'show-comments': "コメントを表示",
    },
  },

  'settings-payments': {
    'titles': {
      'accept-payments': "決済プロバイダーの設定",
      'payment-authorization': "支払いの受付方法",
      'accept-credit-cards': "クレジットカード決済の設定",
      'alternative-payments': "オルタナティブな支払い方法の設定",
      'manual-payments': "銀行振込、代引き、独自の支払い方法の設定",
    },
  },

}
