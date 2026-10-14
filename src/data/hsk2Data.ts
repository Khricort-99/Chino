import { CurriculumLevel } from '../types/curriculum';

export const HSK2_DATA: CurriculumLevel = {
  hskLevel: 2,
  title: 'HSK 2 - Comunicación Elemental y Vida Diaria',
  subtitle: 'Conversaciones cotidianas, comparaciones con 比, rutinas, salud, deseos futuros y transporte ampliado.',
  description: 'Desbloqueado tras certificar HSK 1. Aprende a narrar tu día, comparar cosas con 比, pedir en tiendas y describir tu estado de salud con 300 palabras acumuladas.',
  unlocked: false, // Locked until user passes HSK 1 certification exam
  modules: [
    {
      id: 'hsk2-m1',
      number: 1,
      title: 'Rutina Diaria, Horarios y Auxiliar 要 (yào)',
      subtitle: 'Levantarse, acostarse, el tiempo transcurrido y la intención futura con 要.',
      description: 'Describe tu día a día desde que te levantas hasta que duermes, habla de planes inmediatos y el auxiliar 要.',
      phoneticsGuide: [
        {
          id: 'p2-m1-1',
          concept: 'El Auxiliar 要 (yào) y su 4.to Tono Firme',
          rule: '要 es un 4.to tono tajante (yào). Expresa determinación, deseo firme ("querer") o futuro inminente ("ir a...").',
          example: 'wǒ yào qù (我要去 - Voy a ir / Quiero ir)',
          pinyin: 'yào',
          audioText: '我要去',
          pitchContour: '5-1',
          toneNumber: 4,
          spanishTip: 'Pronúncialo con convicción hacia abajo, como diciendo "¡YA!" en español.'
        },
        {
          id: 'p2-m1-2',
          concept: 'Pronunciación de shàngbān / xiàbān',
          rule: 'En 上班 y 下班, la vocal "a" en bān va seguida de una consonante nasal frontal "n", la lengua toca detrás de los dientes superiores.',
          example: 'shàngbān (上班 - entrar al trabajo)',
          pinyin: 'shàngbān, xiàbān',
          audioText: '上班 下班',
          spanishTip: 'No la abras como "ng"; suena como el "pan" en español.'
        }
      ],
      vocabulary: [
        { id: 'v2-1-1', hanzi: '起床', pinyin: 'qǐchuáng', es: 'Levantarse de la cama', exampleHanzi: '我早上七点起床', examplePinyin: 'Wǒ zǎoshang qī diǎn qǐchuáng', exampleEs: 'Me levanto a las 7 de la mañana' },
        { id: 'v2-1-2', hanzi: '睡觉', pinyin: 'shuìjiào', es: 'Dormir / Irse a dormir', exampleHanzi: '他晚上十点睡觉', examplePinyin: 'Tā wǎnshang shí diǎn shuìjiào', exampleEs: 'Él duerme a las 10 de la noche' },
        { id: 'v2-1-3', hanzi: '上班', pinyin: 'shàngbān', es: 'Ir al trabajo / Entrar a trabajar', exampleHanzi: '妈妈去上班了', examplePinyin: 'Māma qù shàngbān le', exampleEs: 'Mamá se fue a trabajar' },
        { id: 'v2-1-4', hanzi: '下班', pinyin: 'xiàbān', es: 'Salir del trabajo', exampleHanzi: '你几点下班？', examplePinyin: 'Nǐ jǐ diǎn xiàbān?', exampleEs: '¿A qué hora sales del trabajo?' },
        { id: 'v2-1-5', hanzi: '要', pinyin: 'yào', es: 'Querer / Ir a (futuro inminente)', exampleHanzi: '我要去中国', examplePinyin: 'Wǒ yào qù Zhōngguó', exampleEs: 'Quiero ir / Voy a ir a China' },
        { id: 'v2-1-6', hanzi: '时间', pinyin: 'shíjiān', es: 'Tiempo / Horario', exampleHanzi: '我没有时间', examplePinyin: 'Wǒ méiyǒu shíjiān', exampleEs: 'No tengo tiempo' },
        { id: 'v2-1-7', hanzi: '已经', pinyin: 'yǐjīng', es: 'Ya (indica que algo ya sucedió)', exampleHanzi: '他已经回家了', examplePinyin: 'Tā yǐjīng huí jiā le', exampleEs: 'Él ya regresó a casa' },
        { id: 'v2-1-8', hanzi: '准备', pinyin: 'zhǔnbèi', es: 'Preparar / Estar listo', exampleHanzi: '准备考试', examplePinyin: 'Zhǔnbèi kǎoshì', exampleEs: 'Preparar el examen' },
        { id: 'v2-1-9', hanzi: '跑步', pinyin: 'pǎobù', es: 'Correr / Hacer footing', exampleHanzi: '早上跑步', examplePinyin: 'Zǎoshang pǎobù', exampleEs: 'Correr por la mañana' },
        { id: 'v2-1-10', hanzi: '开始', pinyin: 'kāishǐ', es: 'Empezar / Comenzar', exampleHanzi: '会议开始了', examplePinyin: 'Huìyì kāishǐ le', exampleEs: 'La reunión comenzó' },
        { id: 'v2-1-11', hanzi: '早上', pinyin: 'zǎoshang', es: 'Por la mañana temprano', exampleHanzi: '早上好！', examplePinyin: 'Zǎoshang hǎo!', exampleEs: '¡Buenos días!' },
        { id: 'v2-1-12', hanzi: '晚上', pinyin: 'wǎnshang', es: 'Por la noche', exampleHanzi: '晚上见', examplePinyin: 'Wǎnshang jiàn', exampleEs: 'Nos vemos en la noche' },
        { id: 'v2-1-13', hanzi: '可以', pinyin: 'kěyǐ', es: 'Poder / Estar permitido', exampleHanzi: '你可以进来', examplePinyin: 'Nǐ kěyǐ jìnlái', exampleEs: 'Puedes pasar' },
        { id: 'v2-1-14', hanzi: '为什么', pinyin: 'wèishénme', es: '¿Por qué?', exampleHanzi: '你为什么迟到？', examplePinyin: 'Nǐ wèishénme chídào?', exampleEs: '¿Por qué llegas tarde?' },
        { id: 'v2-1-15', hanzi: '因为', pinyin: 'yīnwèi', es: 'Porque / Dado que', exampleHanzi: '因为下雨', examplePinyin: 'Yīnwèi xiàyǔ', exampleEs: 'Porque llueve' }
      ],
      grammar: [
        {
          id: 'g2-m1-1',
          title: 'El Auxiliar 要 (yào) para Futuro Inminente o Determinación',
          formula: 'Sujeto + 要 + Verbo + (了)',
          formulaTokens: [
            { text: 'Sujeto (我 / 天气)', role: 'subject' },
            { text: '要 (yào - ir a / querer)', role: 'verb' },
            { text: 'Verbo (去 / 下雨)', role: 'verb' },
            { text: '了 (le - inminencia)', role: 'particle' }
          ],
          explanation: '要 (yào) indica la firme intención del sujeto de hacer algo ("voy a" o "quiero"). Cuando se combina con 了 al final (快要 / 要...了), señala que un acontecimiento está a punto de ocurrir inmediatamente ("ya va a llover").',
          rulesHighlight: [
            'Intención: 我要去北京 (Voy a ir / Tengo planeado ir a Pekín).',
            'Futuro inminente: 要下雨了 (Ya va a llover).'
          ],
          examples: [
            { hanzi: '我要去商店买水果。', pinyin: 'Wǒ yào qù shāngdiàn mǎi shuǐguǒ.', es: 'Voy a ir a la tienda a comprar fruta.' },
            { hanzi: '火车要开了。', pinyin: 'Huǒchē yào kāi le.', es: 'El tren ya va a partir.' }
          ]
        },
        {
          id: 'g2-m1-2',
          title: 'Conector Causal: 因为 (yīnwèi) ... 所以 (suǒyǐ)',
          formula: '因为 + Causa ，所以 + Consecuencia',
          formulaTokens: [
            { text: '因为 (porque)', role: 'particle' },
            { text: 'Causa (下雨了)', role: 'subject' },
            { text: '所以 (por eso)', role: 'particle' },
            { text: 'Consecuencia (我不去了)', role: 'verb' }
          ],
          explanation: 'En chino los dos conectores se utilizan juntos en la misma frase: "Porque tal cosa, por eso tal otra". En español solo usamos uno de los dos, pero en chino emparejar 因为 y 所以 es la norma elegante.',
          rulesHighlight: [
            'Fórmula: 因为 A, 所以 B.',
            'Ejemplo: Porque llueve, por eso no salgo.'
          ],
          examples: [
            { hanzi: '因为我很累，所以我想睡觉。', pinyin: 'Yīnwèi wǒ hěn lèi, suǒyǐ wǒ xiǎng shuìjiào.', es: 'Porque estoy cansado, por eso quiero dormir.' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e2-m1-1',
          type: 'multiple_choice',
          question: '¿Qué expresa la estructura "要 + Verbo + 了" en chino mandarín?',
          options: [
            'Que una acción o suceso está a punto de ocurrir de forma inminente ("ya va a...")',
            'Que una acción ocurrió en el pasado lejano',
            'Una negación absoluta y rotunda',
            'Una pregunta dubitativa sin respuesta'
          ],
          correctIndex: 0,
          explanation: 'La estructura 要...了 indica un futuro inminente (ej. 要下雨了 = ya va a llover).'
        },
        {
          id: 'e2-m1-2',
          type: 'sentence_builder',
          prompt: 'Ordena la frase: "Me levanto a las siete de la mañana"',
          tokens: ['我', '早上', '七点', '起床', '。'],
          correctOrder: ['我', '早上', '七点', '起床', '。'],
          pinyinHint: 'Wǒ zǎoshang qī diǎn qǐchuáng.',
          translation: 'Me levanto a las 7 de la mañana.',
          explanation: 'Sujeto (我) + Temporal grande (早上) + Hora (七点) + Acción (起床) + 。'
        },
        {
          id: 'e2-m1-3',
          type: 'listening',
          audioText: '他已经去上班了',
          question: 'Escucha el audio y selecciona la opción correcta:',
          options: [
            'Él ya se fue a trabajar',
            'Él está durmiendo todavía',
            'Él no quiere ir al trabajo',
            'Él prepara el desayuno en casa'
          ],
          correctIndex: 0,
          pinyinHint: 'Tā yǐjīng qù shàngbān le',
          explanation: '已经 (ya) + 去上班 (ir a trabajar) + 了 (acción consumada).'
        },
        {
          id: 'e2-m1-4',
          type: 'tone_challenge',
          hanzi: '要',
          pinyinWithoutTone: 'yao',
          options: [
            '1.er tono (yāo)',
            '2.do tono (yáo)',
            '3.er tono (yǎo)',
            '4.to tono (yào - enérgico tajante)'
          ],
          correctIndex: 3,
          correctPinyin: 'yào',
          explanation: '要 (querer / ir a) se pronuncia en 4.to tono: yào.'
        },
        {
          id: 'e2-m1-5',
          type: 'sentence_builder',
          prompt: 'Ordena la frase: "Porque estoy cansado, por eso duermo"',
          tokens: ['因为', '我很累', '，', '所以', '我睡觉', '。'],
          correctOrder: ['因为', '我很累', '，', '所以', '我睡觉', '。'],
          pinyinHint: 'Yīnwèi wǒ hěn lèi, suǒyǐ wǒ shuìjiào.',
          translation: 'Porque estoy cansado, por eso duermo.',
          explanation: 'Par correlativo: 因为 + causa, 所以 + consecuencia.'
        }
      ]
    },
    {
      id: 'hsk2-m2',
      number: 2,
      title: 'Comparaciones con 比 (bǐ), Deporte y Salud',
      subtitle: 'La estructura A 比 B + Adjetivo, ir al médico y actividades deportivas.',
      description: 'Aprende a comparar personas, objetos y precios con 比, y a expresar dolencias o consultar con el médico.',
      phoneticsGuide: [
        {
          id: 'p2-m2-1',
          concept: 'El 3.er Tono de 比 (bǐ)',
          rule: '比 es 3.er tono (bǐ). Baja a la zona más grave de la voz antes de ascender sutilmente.',
          example: 'bǐ (比 - en comparación con)',
          pinyin: 'bǐ',
          audioText: '比',
          pitchContour: '2-1-4',
          toneNumber: 3,
          spanishTip: 'Pronúncialo despacio con voz grave.'
        }
      ],
      vocabulary: [
        { id: 'v2-2-1', hanzi: '比', pinyin: 'bǐ', es: 'En comparación con / Más que', exampleHanzi: '哥哥比我高', examplePinyin: 'Gēge bǐ wǒ gāo', exampleEs: 'Mi hermano mayor es más alto que yo' },
        { id: 'v2-2-2', hanzi: '生病', pinyin: 'shēngbìng', es: 'Enfermarse / Estar enfermo', exampleHanzi: '他生病了', examplePinyin: 'Tā shēngbìng le', exampleEs: 'Él se enfermó' },
        { id: 'v2-2-3', hanzi: '身体', pinyin: 'shēntǐ', es: 'Cuerpo / Salud', exampleHanzi: '身体很好', examplePinyin: 'Shēntǐ hěn hǎo', exampleEs: 'Tener buena salud' },
        { id: 'v2-2-4', hanzi: '药', pinyin: 'yào', es: 'Medicina / Medicamento', exampleHanzi: '吃药', examplePinyin: 'Chī yào', exampleEs: 'Tomar la medicina (lit: comer medicina)' },
        { id: 'v2-2-5', hanzi: '运动', pinyin: 'yùndòng', es: 'Hacer deporte / Ejercicio', exampleHanzi: '多做运动', examplePinyin: 'Duō zuò yùndòng', exampleEs: 'Hacer más ejercicio' },
        { id: 'v2-2-6', hanzi: '游泳', pinyin: 'yóuyǒng', es: 'Nadar / Natación', exampleHanzi: '去游泳', examplePinyin: 'Qù yóuyǒng', exampleEs: 'Ir a nadar' },
        { id: 'v2-2-7', hanzi: '踢足球', pinyin: 'tī zúqiú', es: 'Jugar al fútbol (patear balón)', exampleHanzi: '踢足球很开心', examplePinyin: 'Tī zúqiú hěn kāixīn', exampleEs: 'Jugar al fútbol es divertido' },
        { id: 'v2-2-8', hanzi: '快', pinyin: 'kuài', es: 'Rápido', exampleHanzi: '跑得很快', examplePinyin: 'Pǎo de hěn kuài', exampleEs: 'Corre muy rápido' },
        { id: 'v2-2-9', hanzi: '慢', pinyin: 'màn', es: 'Lento', exampleHanzi: '慢慢吃', examplePinyin: 'Mànman chī', exampleEs: 'Come despacio (buen provecho)' },
        { id: 'v2-2-10', hanzi: '高', pinyin: 'gāo', es: 'Alto', exampleHanzi: '很高', examplePinyin: 'Hěn gāo', exampleEs: 'Muy alto' },
        { id: 'v2-2-11', hanzi: '贵', pinyin: 'guì', es: 'Caro / Costoso', exampleHanzi: '不贵', examplePinyin: 'Bú guì', exampleEs: 'No es caro' },
        { id: 'v2-2-12', hanzi: '便宜', pinyin: 'piányi', es: 'Barato / Económico', exampleHanzi: '太便宜了', examplePinyin: 'Tài piányi le', exampleEs: '¡Demasiado barato!' },
        { id: 'v2-2-13', hanzi: '休息', pinyin: 'xiūxi', es: 'Descansar', exampleHanzi: '好好休息', examplePinyin: 'Hǎohǎo xiūxi', exampleEs: 'Descansa bien' },
        { id: 'v2-2-14', hanzi: '眼睛', pinyin: 'yǎnjing', es: 'Ojo / Ojos', exampleHanzi: '大眼睛', examplePinyin: 'Dà yǎnjing', exampleEs: 'Ojos grandes' },
        { id: 'v2-2-15', hanzi: '累', pinyin: 'lèi', es: 'Cansado(a)', exampleHanzi: '我很累', examplePinyin: 'Wǒ hěn lèi', exampleEs: 'Estoy muy cansado' }
      ],
      grammar: [
        {
          id: 'g2-m2-1',
          title: 'Estructura Comparativa con 比 (bǐ)',
          formula: 'Elemento A + 比 + Elemento B + Adjetivo',
          formulaTokens: [
            { text: 'Elemento A (今天 / 哥哥)', role: 'subject' },
            { text: '比 (bǐ - más que)', role: 'particle' },
            { text: 'Elemento B (昨天 / 我)', role: 'object' },
            { text: 'Adjetivo (热 / 高 / 便宜)', role: 'adjective' }
          ],
          explanation: 'Para comparar dos elementos en chino, la partícula 比 se coloca entre los dos objetos que se comparan, y el adjetivo va al final. NUNCA se usa "很" en una frase con 比 (no se dice *A bǐ B hěn gāo).',
          rulesHighlight: [
            'Fórmula exacta: A + 比 + B + Adjetivo.',
            'Regla de oro: NO uses 很 dentro de la comparación con 比.',
            'Ejemplo: Hoy es más caluroso que ayer ➔ 今天比昨天热。'
          ],
          examples: [
            { hanzi: '今天比昨天热。', pinyin: 'Jīntiān bǐ zuótiān rè.', es: 'Hoy hace más calor que ayer.' },
            { hanzi: '苹果比西瓜便宜。', pinyin: 'Píngguǒ bǐ xīguā piányi.', es: 'Las manzanas son más baratas que la sandía.' },
            { hanzi: '哥哥比我高。', pinyin: 'Gēge bǐ wǒ gāo.', es: 'Mi hermano mayor es más alto que yo.' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e2-m2-1',
          type: 'multiple_choice',
          question: '¿Por qué la oración "*今天比昨天很热" es incorrecta?',
          options: [
            'Porque en las oraciones comparativas con 比 NO se debe colocar el adverbio 很 ante el adjetivo',
            'Porque 比 debe ir al final de la oración',
            'Porque falta el verbo 是',
            'Porque 今天 debe ir después de 昨天'
          ],
          correctIndex: 0,
          explanation: 'Regla fija: en la estructura "A 比 B + Adjetivo", el adjetivo ya está en grado comparativo y está prohibido usar 很.'
        },
        {
          id: 'e2-m2-2',
          type: 'sentence_builder',
          prompt: 'Ordena la comparación: "Mi hermano mayor es más alto que yo"',
          tokens: ['哥哥', '比', '我', '高', '。'],
          correctOrder: ['哥哥', '比', '我', '高', '。'],
          pinyinHint: 'Gēge bǐ wǒ gāo.',
          translation: 'Mi hermano mayor es más alto que yo.',
          explanation: 'A (哥哥) + 比 + B (我) + Adjetivo (高) + 。'
        },
        {
          id: 'e2-m2-3',
          type: 'listening',
          audioText: '他生病了要吃药',
          question: 'Escucha el audio y selecciona el estado de la persona:',
          options: [
            'Se enfermó y necesita tomar medicina',
            'Fue a jugar al fútbol con sus amigos',
            'Va a nadar a la piscina',
            'Descansa porque no tiene trabajo'
          ],
          correctIndex: 0,
          pinyinHint: 'Tā shēngbìng le yào chī yào',
          explanation: '生病 (enfermarse) + 要吃药 (debe tomar medicina).'
        },
        {
          id: 'e2-m2-4',
          type: 'tone_challenge',
          hanzi: '比',
          pinyinWithoutTone: 'bi',
          options: [
            '1.er tono (bī)',
            '2.do tono (bí)',
            '3.er tono (bǐ - bajo descendente y ascendente)',
            '4.to tono (bì)'
          ],
          correctIndex: 2,
          correctPinyin: 'bǐ',
          explanation: '比 es 3.er tono: bǐ.'
        },
        {
          id: 'e2-m2-5',
          type: 'multiple_choice',
          question: '¿Cómo se dice en chino "tomar medicamentos" (usando el verbo comer)?',
          options: [
            '吃药 (chī yào)',
            '喝药 (hē yào)',
            '买药 (mǎi yào)',
            '做药 (zuò yào)'
          ],
          correctIndex: 0,
          explanation: 'En mandarín se dice idiomáticamente "comer medicina": 吃药 (chī yào).'
        }
      ]
    }
  ],
  finalExam: {
    passingScore: 80,
    timeLimitMinutes: 20,
    questions: [
      {
        id: 'hsk2-q1',
        section: 'reading',
        type: 'multiple_choice',
        promptHanzi: '因为今天下大雨，所以我们不踢足球了。',
        question: '¿Por qué no jugaron al fútbol hoy según la frase?',
        options: [
          'Porque está lloviendo fuertemente hoy',
          'Porque tenían que ir a trabajar',
          'Porque estaban enfermos',
          'Porque el campo de juego estaba cerrado'
        ],
        correctIndex: 0,
        explanation: '因为今天下大雨 (porque hoy llueve mucho), 所以不踢足球 (por eso no jugamos al fútbol).'
      }
    ]
  }
};
