import { CurriculumLevel } from '../types/curriculum';

export const HSK1_DATA: CurriculumLevel = {
  hskLevel: 1,
  title: 'HSK 1 - Supervivencia y Fundamentos',
  subtitle: 'Iniciación absoluta: fonética Pinyin, 150 caracteres esenciales, estructuras clave y certificación.',
  description: 'Domina los tonos, saludos, familia, números, horas, compras, transporte y estructuras de conversación cotidiana para certificarte oficialmente en HSK Nivel 1.',
  unlocked: true,
  modules: [
    {
      id: 'hsk1-m1',
      number: 1,
      title: 'Fonética, Tonos, Pronombres y Verbo "Ser"',
      subtitle: 'La base del mandarín: los 4 tonos, saludos básicos, pronombres personales y el verbo 是 (shì).',
      description: 'Aprende cómo funciona el sistema tonal chino sin misterios, las reglas de cambio de tono y a presentarte con total seguridad.',
      phoneticsGuide: [
        {
          id: 'p1-1',
          concept: '1.er Tono (—) Alto y Plano',
          rule: 'Tono agudo sostenido como una nota musical continua (5-5 en la escala de tono). No bajes ni subas la voz.',
          example: 'mā (妈 - madre)',
          pinyin: 'mā',
          audioText: '妈',
          pitchContour: '5-5',
          toneNumber: 1,
          spanishTip: 'Imagina que estás cantando la nota Sol o diciendo "Ahhh" en el médico, manteniendo la nota firme.'
        },
        {
          id: 'p1-2',
          concept: '2.do Tono (ˊ) Ascendente',
          rule: 'Sube de medio a agudo (3-5). Idéntico a la entonación que hacemos en español al preguntar "¿Qué?".',
          example: 'má (麻 - cáñamo)',
          pinyin: 'má',
          audioText: '麻',
          pitchContour: '3-5',
          toneNumber: 2,
          spanishTip: 'Di "¿Cómo?", "¿Qué?" o "¿Sí?". La voz sube con sorpresa o pregunta.'
        },
        {
          id: 'p1-3',
          concept: '3.er Tono (ˇ) Descendente-Ascendente',
          rule: 'Baja a lo más grave de tu registro vocal y luego sube ligeramente (2-1-4). Es el tono más largo.',
          example: 'mǎ (马 - caballo)',
          pinyin: 'mǎ',
          audioText: '马',
          pitchContour: '2-1-4',
          toneNumber: 3,
          spanishTip: 'Como cuando dices con resignación o duda en español: "Bueeeeno..." bajando la garganta.'
        },
        {
          id: 'p1-4',
          concept: '4.to Tono (ˋ) Descendente Corto y Tajante',
          rule: 'Cae con fuerza y rapidez de agudo a grave (5-1). Como una orden o un grito de rechazo.',
          example: 'mà (骂 - regañar)',
          pinyin: 'mà',
          audioText: '骂',
          pitchContour: '5-1',
          toneNumber: 4,
          spanishTip: 'Como dar una orden tajante: "¡No!", "¡Basta!" o "¡Ya!". Seco y enérgico.'
        },
        {
          id: 'p1-5',
          concept: 'Tono Neutro (ligero y corto)',
          rule: 'Sin acento diacrítico. Se pronuncia suave, rápido y sin énfasis, apoyándose en la sílaba anterior.',
          example: 'ma (吗 - partícula interrogativa)',
          pinyin: 'ma',
          audioText: '好吗',
          pitchContour: 'Neutro',
          toneNumber: 5,
          spanishTip: 'Como las sílabas átonas en español (ej. la sílaba "te" en "cómpratelo").'
        },
        {
          id: 'p1-6',
          concept: 'Regla de Cambio Tonal: 3.er + 3.er Tono',
          rule: 'Cuando dos 3.os tonos van juntos, el primero se pronuncia automáticamente como 2.do tono.',
          example: 'nǐ (3) + hǎo (3) ➔ ní hǎo (你好 - Hola)',
          pinyin: 'nǐ hǎo ➔ ní hǎo',
          audioText: '你好',
          toneNumber: 2,
          spanishTip: 'Se escribe "nǐ hǎo" en pinyin oficial, pero la boca dice "ní hǎo" para que sea fluido de articular.'
        },
        {
          id: 'p1-7',
          concept: 'Regla de Cambio Tonal de 不 (bù)',
          rule: 'El adverbio 不 (bù) es normalmente 4.to tono. Pero ante otro 4.to tono, cambia a 2.do tono (bú).',
          example: 'bù + shì (4) ➔ bú shì (不是 - No es/No soy)',
          pinyin: 'bù shì ➔ bú shì',
          audioText: '不是',
          toneNumber: 2,
          spanishTip: 'Decir dos 4.tos seguidos suena muy golpeado; por eso "bù shì" pasa naturalmente a "bú shì".'
        },
        {
          id: 'p1-8',
          concept: 'Consonantes Aspiradas vs No Aspiradas',
          rule: 'P, T, K, Q, CH expulsan una fuerte ráfaga de aire. B, D, G, J, ZH son sordas pero NO llevan aire.',
          example: 'bàba (sin aire) vs pāpa (fuerte golpe de aire)',
          pinyin: 'b / p, d / t, g / k',
          audioText: '爸爸 怕',
          spanishTip: 'El truco del papel: coloca una hoja frente a tus labios. Con P debe moverse fuertemente; con B no se mueve.'
        }
      ],
      vocabulary: [
        {
          id: 'v1-1',
          hanzi: '我',
          pinyin: 'wǒ',
          es: 'Yo / Me / Mí',
          tip: '3.er tono profundo. Representa la primera persona singular.',
          exampleHanzi: '我是学生',
          examplePinyin: 'Wǒ shì xuésheng',
          exampleEs: 'Yo soy estudiante'
        },
        {
          id: 'v1-2',
          hanzi: '你',
          pinyin: 'nǐ',
          es: 'Tú / Te / Ti',
          tip: '3.er tono. Segunda persona informal.',
          exampleHanzi: '你好！',
          examplePinyin: 'Nǐ hǎo!',
          exampleEs: '¡Hola!'
        },
        {
          id: 'v1-3',
          hanzi: '您',
          pinyin: 'nín',
          es: 'Usted (formal y respetuoso)',
          tip: '2.do tono. Lleva debajo el radical de corazón 心 (xīn).',
          exampleHanzi: '您好，老师！',
          examplePinyin: 'Nín hǎo, lǎoshī!',
          exampleEs: '¡Hola, profesor! (con respeto)'
        },
        {
          id: 'v1-4',
          hanzi: '他',
          pinyin: 'tā',
          es: 'Él',
          tip: '1.er tono alto. Lleva el radical de persona 亻 a la izquierda.',
          exampleHanzi: '他是老师',
          examplePinyin: 'Tā shì lǎoshī',
          exampleEs: 'Él es profesor'
        },
        {
          id: 'v1-5',
          hanzi: '她',
          pinyin: 'tā',
          es: 'Ella',
          tip: 'Misma pronunciación tā que "él", pero lleva el radical de mujer 女.',
          exampleHanzi: '她是我的同学',
          examplePinyin: 'Tā shì wǒ de tóngxué',
          exampleEs: 'Ella es mi compañera de clase'
        },
        {
          id: 'v1-6',
          hanzi: '们',
          pinyin: 'men',
          es: 'Sufijo de plural para personas',
          tip: 'Tono neutro suave. Convierte pronombres en plural: 我们 (nosotros), 你们 (ustedes), 他们 (ellos).',
          exampleHanzi: '我们是朋友',
          examplePinyin: 'Wǒmen shì péngyou',
          exampleEs: 'Nosotros somos amigos'
        },
        {
          id: 'v1-7',
          hanzi: '好',
          pinyin: 'hǎo',
          es: 'Bueno / Bien / Buen',
          tip: '3.er tono. Compuesto por mujer 女 y niño 子.',
          exampleHanzi: '很好',
          examplePinyin: 'Hěn hǎo',
          exampleEs: 'Muy bien'
        },
        {
          id: 'v1-8',
          hanzi: '是',
          pinyin: 'shì',
          es: 'Ser / Sí / Es verdad',
          tip: '4.to tono tajante. No se conjuga jamás: sirve para yo, tú, él, nosotros...',
          exampleHanzi: '我是中国人',
          examplePinyin: 'Wǒ shì Zhōngguó rén',
          exampleEs: 'Yo soy chino'
        },
        {
          id: 'v1-9',
          hanzi: '不',
          pinyin: 'bù',
          es: 'No (negación presente y habitual)',
          tip: '4.to tono. Cambia a 2.do tono (bú) antes de otro 4.to tono.',
          exampleHanzi: '他不是学生',
          examplePinyin: 'Tā bú shì xuésheng',
          exampleEs: 'Él no es estudiante'
        },
        {
          id: 'v1-10',
          hanzi: '吗',
          pinyin: 'ma',
          es: 'Partícula interrogativa (¿sí o no?)',
          tip: 'Tono neutro. Se coloca al final de cualquier afirmación para convertirla en pregunta.',
          exampleHanzi: '你是老师吗？',
          examplePinyin: 'Nǐ shì lǎoshī ma?',
          exampleEs: '¿Eres profesor?'
        },
        {
          id: 'v1-11',
          hanzi: '叫',
          pinyin: 'jiào',
          es: 'Llamarse / Gritar / Llamar',
          tip: '4.to tono. Se usa para decir el nombre propio directamente.',
          exampleHanzi: '我叫李明',
          examplePinyin: 'Wǒ jiào Lǐ Míng',
          exampleEs: 'Me llamo Li Ming'
        },
        {
          id: 'v1-12',
          hanzi: '什么',
          pinyin: 'shénme',
          es: '¿Qué? / ¿Cuál?',
          tip: '2.do tono + neutro. Se queda en el mismo lugar de la palabra que reemplaza.',
          exampleHanzi: '你叫什么名字？',
          examplePinyin: 'Nǐ jiào shénme míngzi?',
          exampleEs: '¿Cómo te llamas? (lit: ¿Te llamas qué nombre?)'
        },
        {
          id: 'v1-13',
          hanzi: '老师',
          pinyin: 'lǎoshī',
          es: 'Profesor / Maestro',
          tip: '3.er tono + 1.er tono. Término de gran prestigio en la cultura china.',
          exampleHanzi: '王老师好！',
          examplePinyin: 'Wáng lǎoshī hǎo!',
          exampleEs: '¡Hola, profesor Wang!'
        },
        {
          id: 'v1-14',
          hanzi: '学生',
          pinyin: 'xuésheng',
          es: 'Estudiante / Alumno',
          tip: '2.do tono + neutro. La "x" suena como un silbido suave entre "s" y "sh".',
          exampleHanzi: '我们都是学生',
          examplePinyin: 'Wǒmen dōu shì xuésheng',
          exampleEs: 'Todos nosotros somos estudiantes'
        },
        {
          id: 'v1-15',
          hanzi: '人',
          pinyin: 'rén',
          es: 'Persona / Ser humano',
          tip: '2.do tono. La "r" china suena como la "s" de "pleasure" en inglés, con la lengua retraída.',
          exampleHanzi: '中国人',
          examplePinyin: 'Zhōngguó rén',
          exampleEs: 'Persona china / Chino(a)'
        },
        {
          id: 'v1-16',
          hanzi: '谢谢',
          pinyin: 'xièxie',
          es: 'Gracias',
          tip: '4.to tono + tono neutro. Duplicación afectiva común.',
          exampleHanzi: '谢谢你！',
          examplePinyin: 'Xièxie nǐ!',
          exampleEs: '¡Muchas gracias!'
        },
        {
          id: 'v1-17',
          hanzi: '不客气',
          pinyin: 'bú kèqi',
          es: 'De nada / Por nada',
          tip: 'Literalmente: "No seas cortés". Recuerda que 不 se pronuncia bú aquí.',
          exampleHanzi: '不用谢，不客气',
          examplePinyin: 'Bú yòng xiè, bú kèqi',
          exampleEs: 'No hay de qué, de nada'
        },
        {
          id: 'v1-18',
          hanzi: '再见',
          pinyin: 'zàijiàn',
          es: 'Adiós / Hasta luego',
          tip: 'Ambos 4.tos tonos. Literalmente: "Volver a ver".',
          exampleHanzi: '明天见，再见！',
          examplePinyin: 'Míngtiān jiàn, zàijiàn!',
          exampleEs: 'Hasta mañana, ¡adiós!'
        },
        {
          id: 'v1-19',
          hanzi: '对不起',
          pinyin: 'duìbuqǐ',
          es: 'Disculpa / Perdón / Lo siento',
          tip: '4.to tono + neutro + 3.er tono. Disculpa sincera.',
          exampleHanzi: '对不起，我来晚了',
          examplePinyin: 'Duìbuqǐ, wǒ lái wǎn le',
          exampleEs: 'Lo siento, he llegado tarde'
        },
        {
          id: 'v1-20',
          hanzi: '没关系',
          pinyin: 'méi guānxi',
          es: 'No te preocupes / No importa',
          tip: '2.do tono + 1.er tono + neutro. Respuesta cortés a 对不起.',
          exampleHanzi: '没关系，请进',
          examplePinyin: 'Méi guānxi, qǐng jìn',
          exampleEs: 'No pasa nada, pasa por favor'
        },
        {
          id: 'v1-21',
          hanzi: '朋友',
          pinyin: 'péngyou',
          es: 'Amigo / Amiga',
          tip: '2.do tono + neutro. Compuesto por dos lunas 月 juntas.',
          exampleHanzi: '他是我的好朋友',
          examplePinyin: 'Tā shì wǒ de hǎo péngyou',
          exampleEs: 'Él es mi buen amigo'
        }
      ],
      grammar: [
        {
          id: 'g1-1',
          title: 'El Verbo Ser (是 - shì) y su Negación',
          formula: 'Sujeto + [不] + 是 + Sustantivo',
          formulaTokens: [
            { text: 'Sujeto (我 / 他 / 她)', role: 'subject', description: 'Quien realiza o es' },
            { text: '(不 - bù ➔ bú)', role: 'negative', description: 'Opcional para negar' },
            { text: '是 (shì)', role: 'verb', description: 'Verbo ser invariable' },
            { text: 'Sustantivo (老师 / 学生)', role: 'object', description: 'Profesión o identidad' }
          ],
          explanation: 'El verbo 是 (shì) equivale al verbo "ser" en español para conectar dos sustantivos o identidades (A es B). Nunca se conjuga: no cambia con yo, tú, nosotros ni ellos. Para negar, se antepone 不 (bù), el cual cambia de tono a 2.do tono (bú) por ir antes del 4.to tono shì.',
          rulesHighlight: [
            'Invariable: 我是 (soy), 你是 (eres), 我们是 (somos).',
            'Regla tonal: 不 (4.to) + 是 (4.to) se pronuncia obligatoriamente "bú shì".',
            '¡Atención!: 是 NO se usa con adjetivos puros (NO se dice "Wǒ shì hǎo", eso es un error grave de principiante).'
          ],
          examples: [
            { hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.', es: 'Yo soy estudiante.' },
            { hanzi: '他不是老师。', pinyin: 'Tā bú shì lǎoshī.', es: 'Él no es profesor.' },
            { hanzi: '我们是中国人。', pinyin: 'Wǒmen shì Zhōngguó rén.', es: 'Nosotros somos chinos.' }
          ]
        },
        {
          id: 'g1-2',
          title: 'Preguntas de Sí o No con la Partícula 吗 (ma)',
          formula: 'Oración Afirmativa + 吗 ？',
          formulaTokens: [
            { text: 'Sujeto + Verbo + Objeto', role: 'subject', description: 'Frase declarativa normal' },
            { text: '+ 吗 (ma) ？', role: 'particle', description: 'Convierte en pregunta Sí/No' }
          ],
          explanation: 'En chino mandarín NO se invierte el orden del sujeto y el verbo para hacer preguntas. Simplemente tomas una frase normal afirmativa y le pegas la partícula neutra 吗 (ma) al final.',
          rulesHighlight: [
            'Sin invertir palabras: "Tú eres profesor" (你是老师) ➔ "¿Eres profesor?" (你是老师吗？)',
            'Para responder afirmativamente: 是 (Sí) o 是的 (Así es).',
            'Para responder negativamente: 不是 (No).'
          ],
          examples: [
            { hanzi: '你是老师吗？', pinyin: 'Nǐ shì lǎoshī ma?', es: '¿Eres profesor?' },
            { hanzi: '他们是学生吗？', pinyin: 'Tāmen shì xuésheng ma?', es: '¿Ellos son estudiantes?' },
            { hanzi: '你好吗？', pinyin: 'Nǐ hǎo ma?', es: '¿Cómo estás? (lit: ¿Estás bien?)' }
          ]
        },
        {
          id: 'g1-3',
          title: 'Preguntar y Decir el Nombre con 叫 (jiào) y 什么 (shénme)',
          formula: 'Sujeto + 叫 + 什么 + (名字) ？',
          formulaTokens: [
            { text: 'Sujeto (你 / 他)', role: 'subject' },
            { text: '叫 (jiào - llamarse)', role: 'verb' },
            { text: '什么 (shénme - qué)', role: 'particle' },
            { text: '名字 (míngzi - nombre)', role: 'object' }
          ],
          explanation: 'En chino los pronombres interrogativos como 什么 (qué) no se mueven al principio de la frase; ocupan exactamente la posición de la respuesta. Por eso preguntamos "Tú te llamas qué nombre".',
          rulesHighlight: [
            'Pregunta: 你叫什么名字？ (¿Cómo te llamas?)',
            'Respuesta: 我叫 + [Tu Nombre]. Por ejemplo: 我叫李明 (Me llamo Li Ming).'
          ],
          examples: [
            { hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', es: '¿Cómo te llamas?' },
            { hanzi: '我叫大卫。', pinyin: 'Wǒ jiào Dàwèi.', es: 'Me llamo David.' },
            { hanzi: '他叫什么？', pinyin: 'Tā jiào shénme?', es: '¿Cómo se llama él?' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e1-1',
          type: 'multiple_choice',
          question: '¿Cómo cambia la pronunciación del adverbio 不 (bù) antes del verbo 是 (shì)?',
          options: [
            'Cambia a 2.do tono ascendente (bú shì)',
            'Permanece en 4.to tono cortante (bù shì)',
            'Se convierte en tono neutro sin fuerza (bu shì)',
            'Cambia a 3.er tono grave (bǔ shì)'
          ],
          correctIndex: 0,
          explanation: 'Regla de cambio tonal: cuando 不 (normalmente 4.to tono) antecede a otra sílaba en 4.to tono como 是 (shì), cambia obligatoriamente a 2.do tono (bú).'
        },
        {
          id: 'e1-2',
          type: 'sentence_builder',
          prompt: 'Ordena los bloques en chino para formar: "¿Ella es profesora?"',
          tokens: ['她', '是', '老师', '吗', '？'],
          correctOrder: ['她', '是', '老师', '吗', '？'],
          pinyinHint: 'Tā shì lǎoshī ma?',
          translation: '¿Ella es profesora?',
          explanation: 'Estructura interrogativa: Sujeto (她) + Verbo (是) + Objeto (老师) + Partícula 吗 + ¿?'
        },
        {
          id: 'e1-3',
          type: 'listening',
          audioText: '我是学生',
          question: 'Escucha con atención la pronunciación y selecciona la traducción en español:',
          options: [
            'Yo soy estudiante',
            'Él es profesor',
            'Tú eres mi amigo',
            'Ella no es china'
          ],
          correctIndex: 0,
          pinyinHint: 'Wǒ shì xuésheng',
          explanation: 'El audio dice "我是学生" (Wǒ shì xuésheng): 我 (Yo) + 是 (soy) + 学生 (estudiante).'
        },
        {
          id: 'e1-4',
          type: 'tone_challenge',
          hanzi: '吗',
          pinyinWithoutTone: 'ma',
          options: [
            '1.er tono (mā - alto y plano)',
            '2.do tono (má - ascendente)',
            '3.er tono (mǎ - descendente y ascendente)',
            'Tono Neutro (ma - suave y sin acento)'
          ],
          correctIndex: 3,
          correctPinyin: 'ma',
          explanation: 'La partícula interrogativa 吗 siempre se pronuncia en tono neutro (ligero, átono y corto).'
        },
        {
          id: 'e1-5',
          type: 'sentence_builder',
          prompt: 'Ordena la pregunta en chino: "¿Cómo te llamas?" (lit. ¿Tú te llamas qué nombre?)',
          tokens: ['你', '叫', '什么', '名字', '？'],
          correctOrder: ['你', '叫', '什么', '名字', '？'],
          pinyinHint: 'Nǐ jiào shénme míngzi?',
          translation: '¿Cómo te llamas?',
          explanation: 'En chino los interrogativos no se adelantan: Sujeto (你) + Verbo (叫) + Interrogativo (什么) + Sustantivo (名字) + ？'
        }
      ]
    },
    {
      id: 'hsk1-m2',
      number: 2,
      title: 'Familia, Posesión y Nacionalidad',
      subtitle: 'La partícula 的 (de), la negación con 没有 (méiyǒu) y cómo hablar de tu país y parientes.',
      description: 'Presenta a tu familia, expresa posesión con 的, domina el verbo "tener/haber" 有 y pregunta nacionalidades.',
      phoneticsGuide: [
        {
          id: 'p2-1',
          concept: 'El Tono Neutro en Parentesco Duplicado',
          rule: 'En palabras familiares duplicadas, la primera sílaba lleva su tono original y la segunda se debilita a tono neutro.',
          example: 'bàba (爸爸 - papá), māma (妈妈 - mamá)',
          pinyin: 'bàba, māma, gēge, jiějie',
          audioText: '爸爸 妈妈 哥哥 姐姐',
          toneNumber: 5,
          spanishTip: 'Como decir "pápá" acentuando solo la primera: BA-ba, MA-ma.'
        },
        {
          id: 'p2-2',
          concept: 'La Consonante R en Mandarín (rén, rì)',
          rule: 'No vibra como la "rr" española. Levanta la punta de la lengua hacia el paladar (posición retrofleja) y produce una fricción suave.',
          example: 'rén (人 - persona), rì (日 - sol/día)',
          pinyin: 'rén, rì',
          audioText: '中国人',
          spanishTip: 'Suena muy similar a la "s" en la palabra inglesa "measure" o "pleasure", jamás vibra como perro.'
        },
        {
          id: 'p2-3',
          concept: 'La Vocal Especial Ü con Dos Puntos (nǚ, lǜ)',
          rule: 'Coloca los labios redondos como para decir "U", pero sin mover la boca intenta pronunciar una "I".',
          example: 'nǚ (女 - mujer), nǚ\'ér (女儿 - hija)',
          pinyin: 'nǚ',
          audioText: '女儿',
          spanishTip: 'Boca de U + decir I. Es la misma "u" francesa de "tu" o la "ü" alemana de "über".'
        }
      ],
      vocabulary: [
        {
          id: 'v2-1',
          hanzi: '爸爸',
          pinyin: 'bàba',
          es: 'Papá / Padre',
          tip: '4.to tono + neutro. Primer sílaba con fuerza.',
          exampleHanzi: '我爸爸是医生',
          examplePinyin: 'Wǒ bàba shì yīshēng',
          exampleEs: 'Mi papá es médico'
        },
        {
          id: 'v2-2',
          hanzi: '妈妈',
          pinyin: 'māma',
          es: 'Mamá / Madre',
          tip: '1.er tono + neutro. Lleva el radical de mujer 女.',
          exampleHanzi: '我爱我妈妈',
          examplePinyin: 'Wǒ ài wǒ māma',
          exampleEs: 'Amo a mi mamá'
        },
        {
          id: 'v2-3',
          hanzi: '儿子',
          pinyin: 'érzi',
          es: 'Hijo',
          tip: '2.do tono retroflexo + neutro.',
          exampleHanzi: '他有一个儿子',
          examplePinyin: 'Tā yǒu yí gè érzi',
          exampleEs: 'Él tiene un hijo'
        },
        {
          id: 'v2-4',
          hanzi: '女儿',
          pinyin: 'nǚ\'ér',
          es: 'Hija',
          tip: '3.er tono con ü + 2.do tono retroflexo.',
          exampleHanzi: '她女儿很漂亮',
          examplePinyin: 'Tā nǚ\'ér hěn piàoliang',
          exampleEs: 'Su hija es muy hermosa'
        },
        {
          id: 'v2-5',
          hanzi: '同学',
          pinyin: 'tóngxué',
          es: 'Compañero(a) de clase',
          tip: '2.do tono + 2.do tono. Literalmente: "juntos aprender".',
          exampleHanzi: '他们是我的同学',
          examplePinyin: 'Tāmen shì wǒ de tóngxué',
          exampleEs: 'Ellos son mis compañeros de clase'
        },
        {
          id: 'v2-6',
          hanzi: '的',
          pinyin: 'de',
          es: 'Partícula posesiva ("de")',
          tip: 'Tono neutro. Une al poseedor con la posesión.',
          exampleHanzi: '我的书',
          examplePinyin: 'Wǒ de shū',
          exampleEs: 'Mi libro (lit: Yo de libro)'
        },
        {
          id: 'v2-7',
          hanzi: '有',
          pinyin: 'yǒu',
          es: 'Tener / Haber / Existir',
          tip: '3.er tono. Su ÚNICA negación es 没有 (méiyǒu). NUNCA digas 不有.',
          exampleHanzi: '我有汉语书',
          examplePinyin: 'Wǒ yǒu Hànyǔ shū',
          exampleEs: 'Tengo libros de chino'
        },
        {
          id: 'v2-8',
          hanzi: '没有',
          pinyin: 'méiyǒu',
          es: 'No tener / No haber',
          tip: '2.do tono + 3.er tono. Obligatorio para negar 有.',
          exampleHanzi: '我没有猫',
          examplePinyin: 'Wǒ méiyǒu māo',
          exampleEs: 'No tengo gato'
        },
        {
          id: 'v2-9',
          hanzi: '谁',
          pinyin: 'shéi / shuí',
          es: '¿Quién?',
          tip: '2.do tono. Se pronuncia "shéi" comúnmente en el habla diaria.',
          exampleHanzi: '他是谁？',
          examplePinyin: 'Tā shì shéi?',
          exampleEs: '¿Quién es él?'
        },
        {
          id: 'v2-10',
          hanzi: '哪',
          pinyin: 'nǎ',
          es: '¿Cuál? / ¿Qué?',
          tip: '3.er tono interrogativo. No confundir con 那 (nà - ese/aquel).',
          exampleHanzi: '哪个人？',
          examplePinyin: 'Nǎ ge rén?',
          exampleEs: '¿Cuál persona?'
        },
        {
          id: 'v2-11',
          hanzi: '国',
          pinyin: 'guó',
          es: 'País / Nación',
          tip: '2.do tono. Carácter con el radical de recinto 囗 rodeando al jade 玉.',
          exampleHanzi: '国家',
          examplePinyin: 'Guójiā',
          exampleEs: 'País'
        },
        {
          id: 'v2-12',
          hanzi: '中国',
          pinyin: 'Zhōngguó',
          es: 'China (País del Centro)',
          tip: '1.er tono + 2.do tono. Literalmente: Reino del Centro.',
          exampleHanzi: '我爱中国',
          examplePinyin: 'Wǒ ài Zhōngguó',
          exampleEs: 'Amo a China'
        },
        {
          id: 'v2-13',
          hanzi: '智利',
          pinyin: 'Zhìlì',
          es: 'Chile',
          tip: '4.to tono + 4.to tono. País hispanohablante frecuente.',
          exampleHanzi: '我是智利人',
          examplePinyin: 'Wǒ shì Zhìlì rén',
          exampleEs: 'Soy chileno(a)'
        },
        {
          id: 'v2-14',
          hanzi: '西班牙',
          pinyin: 'Xībānyá',
          es: 'España',
          tip: '1.er + 1.er + 2.do tono.',
          exampleHanzi: '西班牙人说西班牙语',
          examplePinyin: 'Xībānyá rén shuō Xībānyáyǔ',
          exampleEs: 'Los españoles hablan español'
        },
        {
          id: 'v2-15',
          hanzi: '家',
          pinyin: 'jiā',
          es: 'Familia / Casa / Hogar',
          tip: '1.er tono. Muestra un techo 宀 con un cerdo 豕 debajo.',
          exampleHanzi: '我回家',
          examplePinyin: 'Wǒ huí jiā',
          exampleEs: 'Vuelvo a casa'
        },
        {
          id: 'v2-16',
          hanzi: '这',
          pinyin: 'zhè',
          es: 'Este / Esta / Esto',
          tip: '4.to tono. Para objetos cercanos al hablante.',
          exampleHanzi: '这是我的书',
          examplePinyin: 'Zhè shì wǒ de shū',
          exampleEs: 'Este es mi libro'
        },
        {
          id: 'v2-17',
          hanzi: '那',
          pinyin: 'nà',
          es: 'Ese / Aquel / Esa / Aquella',
          tip: '4.to tono. Para objetos alejados.',
          exampleHanzi: '那是谁？',
          examplePinyin: 'Nà shì shéi?',
          exampleEs: '¿Quién es aquel?'
        },
        {
          id: 'v2-18',
          hanzi: '个',
          pinyin: 'gè',
          es: 'Clasificador universal',
          tip: '4.to tono (o neutro). El clasificador más usado del mandarín.',
          exampleHanzi: '一个人',
          examplePinyin: 'Yí gè rén',
          exampleEs: 'Una persona'
        },
        {
          id: 'v2-19',
          hanzi: '和',
          pinyin: 'hé',
          es: 'Y (conecta solo sustantivos)',
          tip: '2.do tono. ¡Solo une sustantivos o personas, nunca oraciones completas!',
          exampleHanzi: '我和你',
          examplePinyin: 'Wǒ hé nǐ',
          exampleEs: 'Tú y yo'
        },
        {
          id: 'v2-20',
          hanzi: '口',
          pinyin: 'kǒu',
          es: 'Boca / Clasificador para miembros de familia',
          tip: '3.er tono. Se usa para contar cuántos parientes viven en casa.',
          exampleHanzi: '我家有三口人',
          examplePinyin: 'Wǒ jiā yǒu sān kǒu rén',
          exampleEs: 'En mi familia somos tres personas'
        }
      ],
      grammar: [
        {
          id: 'g2-1',
          title: 'Partícula Posesiva 的 (de) y su Omisión Familiar',
          formula: 'Poseedor + 的 + Posesión',
          formulaTokens: [
            { text: 'Poseedor (我 / 他 / 老师)', role: 'subject' },
            { text: '的 (de)', role: 'particle' },
            { text: 'Posesión (书 / 朋友 / 电脑)', role: 'object' }
          ],
          explanation: 'La partícula 的 (de) indica pertenencia equivalente al genitivo sajón o "de" en español. Lo crucial: cuando el vínculo es muy cercano o de parentesco directo (mamá, papá, país, escuela), 的 se omite comúnmente por cariño y fluidez.',
          rulesHighlight: [
            'Con posesión normal: 我的书 (Mi libro), 他的杯子 (Su vaso).',
            'Omisión con familia y vínculos íntimos: 我爸爸 (Mi papá), 我妈妈 (Mi mamá), 我们学校 (Nuestra escuela).'
          ],
          examples: [
            { hanzi: '这是我的书。', pinyin: 'Zhè shì wǒ de shū.', es: 'Este es mi libro.' },
            { hanzi: '他是我爸爸。', pinyin: 'Tā shì wǒ bàba.', es: 'Él es mi papá (omitiendo 的).' },
            { hanzi: '那是谁的苹果？', pinyin: 'Nà shì shéi de píngguǒ?', es: '¿De quién es aquella manzana?' }
          ]
        },
        {
          id: 'g2-2',
          title: 'Verbo 有 (tener / haber) y Negación Exclusiva con 没有',
          formula: 'Sujeto + [没有] + 有 + Sustantivo',
          formulaTokens: [
            { text: 'Sujeto (我 / 她 / 学校)', role: 'subject' },
            { text: '有 (yǒu) / 没有 (méiyǒu)', role: 'verb' },
            { text: 'Objeto (书 / 苹果 / 儿子)', role: 'object' }
          ],
          explanation: 'El verbo 有 (yǒu) expresa tenencia y también existencia (hay). Regla inquebrantable del mandarín: JAMÁS se niega con 不 (bù); siempre se niega con 没有 (méiyǒu).',
          rulesHighlight: [
            'Correcto: 我没有 (No tengo).',
            '¡ERROR GRAVE!: 我不有 (No existe en mandarín).',
            'Para preguntar si tienes algo: 你有...吗？ o 你有没有...？'
          ],
          examples: [
            { hanzi: '我有一个儿子。', pinyin: 'Wǒ yǒu yí gè érzi.', es: 'Tengo un hijo.' },
            { hanzi: '她没有女儿。', pinyin: 'Tā méiyǒu nǚ\'ér.', es: 'Ella no tiene hijas.' },
            { hanzi: '你有汉语老师吗？', pinyin: 'Nǐ yǒu Hànyǔ lǎoshī ma?', es: '¿Tienes profesor de chino?' }
          ]
        },
        {
          id: 'g2-3',
          title: 'Preguntar Nacionalidad con 哪国人 (nǎ guó rén)',
          formula: 'Sujeto + 是 + 哪国人 ？',
          formulaTokens: [
            { text: 'Sujeto (你 / 他)', role: 'subject' },
            { text: '是 (shì - ser)', role: 'verb' },
            { text: '哪 (nǎ - cuál)', role: 'particle' },
            { text: '国 (guó - país)', role: 'object' },
            { text: '人 (rén - persona)', role: 'object' }
          ],
          explanation: 'Para preguntar la nacionalidad de alguien, se usa la fórmula fija "哪国人" (lit: ¿persona de qué país?). Para responder, simplemente reemplazas "哪" por el nombre de tu país.',
          rulesHighlight: [
            'Pregunta: 你是哪国人？ (¿De qué país eres?)',
            'Respuesta: 我是智利人 (Soy chileno) / 我是中国人 (Soy chino) / 我是西班牙人 (Soy español).'
          ],
          examples: [
            { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', es: '¿De qué país eres?' },
            { hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', es: 'Soy chino(a).' },
            { hanzi: '他也是智利人吗？', pinyin: 'Tā yě shì Zhìlì rén ma?', es: '¿Él también es chileno?' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e2-1',
          type: 'multiple_choice',
          question: '¿Cuál es la ÚNICA forma gramaticalmente correcta de negar el verbo 有 (yǒu - tener)?',
          options: [
            '没有 (méiyǒu)',
            '不有 (bùyǒu)',
            '别有 (biéyǒu)',
            '无有 (wúyǒu)'
          ],
          correctIndex: 0,
          explanation: 'El verbo 有 es el único verbo en mandarín que tiene negación fija obligatoria con 没 (méiyǒu). "不有" es un error gramatical absoluto.'
        },
        {
          id: 'e2-2',
          type: 'sentence_builder',
          prompt: 'Ordena la oración: "Ella es mi mamá"',
          tokens: ['她', '是', '我', '妈妈', '。'],
          correctOrder: ['她', '是', '我', '妈妈', '。'],
          pinyinHint: 'Tā shì wǒ māma.',
          translation: 'Ella es mi mamá.',
          explanation: 'Con miembros de la familia directa, la partícula 的 se puede omitir naturalmente: 她 + 是 + 我 + 妈妈。'
        },
        {
          id: 'e2-3',
          type: 'listening',
          audioText: '你是哪国人',
          question: 'Escucha el audio y elige qué está preguntando el interlocutor:',
          options: [
            '¿De qué país eres?',
            '¿Cómo se llama tu amigo?',
            '¿Cuántas personas hay en tu familia?',
            '¿Dónde vive tu profesor?'
          ],
          correctIndex: 0,
          pinyinHint: 'Nǐ shì nǎ guó rén?',
          explanation: 'El audio dice "你是哪国人" (Nǐ shì nǎ guó rén?), la pregunta estándar para saber la nacionalidad.'
        },
        {
          id: 'e2-4',
          type: 'tone_challenge',
          hanzi: '国',
          pinyinWithoutTone: 'guo',
          options: [
            '1.er tono (guō - plano)',
            '2.do tono (guó - ascendente)',
            '3.er tono (guǒ - descendente-ascendente)',
            '4.to tono (guò - descendente corto)'
          ],
          correctIndex: 1,
          correctPinyin: 'guó',
          explanation: '国 (país) se pronuncia en 2.do tono ascendente: guó (como en Zhōngguó).'
        },
        {
          id: 'e2-5',
          type: 'multiple_choice',
          question: '¿Cómo se dice en chino: "Él no tiene libros"?',
          options: [
            '他没有书 (Tā méiyǒu shū)',
            '他不有书 (Tā bù yǒu shū)',
            '他不书 (Tā bù shū)',
            '他没是书 (Tā méi shì shū)'
          ],
          correctIndex: 0,
          explanation: 'La negación de tener es 没有 (méiyǒu), por tanto: 他没有书 (Tā méiyǒu shū).'
        }
      ]
    },
    {
      id: 'hsk1-m3',
      number: 3,
      title: 'Números, Fechas, Horas y Edad',
      subtitle: 'Contar de 0 a 100, decir fechas completas de mayor a menor, la hora y cuántos años tienes.',
      description: 'Aprende la lógica matemática del mandarín, el orden cronológico universal (año-mes-día-hora) y cómo preguntar la edad con 几 y 多大.',
      phoneticsGuide: [
        {
          id: 'p3-1',
          concept: 'Los Tonos de los Números Básicos (1 al 10)',
          rule: '一 (yī, 1.er), 二 (èr, 4.to), 三 (sān, 1.er), 四 (sì, 4.to), 五 (wǔ, 3.er), 六 (liù, 4.to), 七 (qī, 1.er), 八 (bā, 1.er), 九 (jiǔ, 3.er), 十 (shí, 2.do).',
          example: 'sì (4) vs shí (10)',
          pinyin: 'sì (4) vs shí (10)',
          audioText: '四 十',
          spanishTip: 'Cuidado con sì (4) y shí (10): 4 es plano con s dental; 10 es retroflejo con lengua doblada y tono ascendente.'
        },
        {
          id: 'p3-2',
          concept: '二 (èr) vs 两 (liǎng) para el Número 2',
          rule: '二 se usa para contar dígitos (1, 2, 3), números de teléfono o matemáticas. 两 se usa obligatoriamente cuando sigue un clasificador.',
          example: 'èr (2) vs liǎng gè rén (dos personas)',
          pinyin: 'liǎng gè rén',
          audioText: '两个人',
          spanishTip: 'Jamás digas "èr gè rén"; siempre se dice "liǎng gè rén".'
        }
      ],
      vocabulary: [
        { id: 'v3-1', hanzi: '零', pinyin: 'líng', es: 'Cero (0)', exampleHanzi: '二零二六年', examplePinyin: 'Èr líng èr liù nián', exampleEs: 'Año 2026' },
        { id: 'v3-2', hanzi: '一', pinyin: 'yī', es: 'Uno (1)', exampleHanzi: '一个', examplePinyin: 'Yí gè', exampleEs: 'Uno / Una' },
        { id: 'v3-3', hanzi: '二', pinyin: 'èr', es: 'Dos (2)', exampleHanzi: '十二', examplePinyin: 'Shí\'èr', exampleEs: 'Doce' },
        { id: 'v3-4', hanzi: '两', pinyin: 'liǎng', es: 'Dos (ante clasificadores)', exampleHanzi: '两个人', examplePinyin: 'Liǎng gè rén', exampleEs: 'Dos personas' },
        { id: 'v3-5', hanzi: '三', pinyin: 'sān', es: 'Tres (3)', exampleHanzi: '三个月', examplePinyin: 'Sān gè yuè', exampleEs: 'Tres meses' },
        { id: 'v3-6', hanzi: '四', pinyin: 'sì', es: 'Cuatro (4)', exampleHanzi: '四点', examplePinyin: 'Sì diǎn', exampleEs: 'Las 4 en punto' },
        { id: 'v3-7', hanzi: '五', pinyin: 'wǔ', es: 'Cinco (5)', exampleHanzi: '五天', examplePinyin: 'Wǔ tiān', exampleEs: 'Cinco días' },
        { id: 'v3-8', hanzi: '六', pinyin: 'liù', es: 'Seis (6)', exampleHanzi: '星期六', examplePinyin: 'Xīngqīliù', exampleEs: 'Sábado' },
        { id: 'v3-9', hanzi: '七', pinyin: 'qī', es: 'Siete (7)', exampleHanzi: '七号', examplePinyin: 'Qī hào', exampleEs: 'Día 7' },
        { id: 'v3-10', hanzi: '八', pinyin: 'bā', es: 'Ocho (8 - de la suerte)', exampleHanzi: '八月', examplePinyin: 'Bā yuè', exampleEs: 'Agosto' },
        { id: 'v3-11', hanzi: '九', pinyin: 'jiǔ', es: 'Nueve (9)', exampleHanzi: '九十', examplePinyin: 'Jiǔshí', exampleEs: 'Noventa' },
        { id: 'v3-12', hanzi: '十', pinyin: 'shí', es: 'Diez (10)', exampleHanzi: '十五', examplePinyin: 'Shíwǔ', exampleEs: 'Quince' },
        { id: 'v3-13', hanzi: '百', pinyin: 'bǎi', es: 'Cien / Centena (100)', exampleHanzi: '一百', examplePinyin: 'Yìbǎi', exampleEs: 'Cien' },
        { id: 'v3-14', hanzi: '年', pinyin: 'nián', es: 'Año', exampleHanzi: '今年', examplePinyin: 'Jīnnián', exampleEs: 'Este año' },
        { id: 'v3-15', hanzi: '月', pinyin: 'yuè', es: 'Mes / Luna', exampleHanzi: '十月', examplePinyin: 'Shí yuè', exampleEs: 'Octubre (mes 10)' },
        { id: 'v3-16', hanzi: '日', pinyin: 'rì', es: 'Día / Sol (formal)', exampleHanzi: '十月一日', examplePinyin: 'Shí yuè yī rì', exampleEs: '1 de octubre' },
        { id: 'v3-17', hanzi: '号', pinyin: 'hào', es: 'Número / Día del mes (oral)', exampleHanzi: '今天五号', examplePinyin: 'Jīntiān wǔ hào', exampleEs: 'Hoy es día 5' },
        { id: 'v3-18', hanzi: '星期', pinyin: 'xīngqī', es: 'Semana', exampleHanzi: '星期一', examplePinyin: 'Xīngqīyī', exampleEs: 'Lunes' },
        { id: 'v3-19', hanzi: '今天', pinyin: 'jīntiān', es: 'Hoy', exampleHanzi: '今天星期五', examplePinyin: 'Jīntiān xīngqīwǔ', exampleEs: 'Hoy es viernes' },
        { id: 'v3-20', hanzi: '明天', pinyin: 'míngtiān', es: 'Mañana', exampleHanzi: '明天见', examplePinyin: 'Míngtiān jiàn', exampleEs: 'Hasta mañana' },
        { id: 'v3-21', hanzi: '昨天', pinyin: 'zuótiān', es: 'Ayer', exampleHanzi: '昨天是星期三', examplePinyin: 'Zuótiān shì xīngqīsān', exampleEs: 'Ayer fue miércoles' },
        { id: 'v3-22', hanzi: '点', pinyin: 'diǎn', es: 'Hora en punto', exampleHanzi: '三点', examplePinyin: 'Sān diǎn', exampleEs: 'Las 3 en punto' },
        { id: 'v3-23', hanzi: '分', pinyin: 'fēn', es: 'Minuto', exampleHanzi: '十分', examplePinyin: 'Shí fēn', exampleEs: 'Diez minutos' },
        { id: 'v3-24', hanzi: '现在', pinyin: 'xiànzài', es: 'Ahora', exampleHanzi: '现在几点？', examplePinyin: 'Xiànzài jǐ diǎn?', exampleEs: '¿Qué hora es ahora?' },
        { id: 'v3-25', hanzi: '几', pinyin: 'jǐ', es: '¿Cuántos? (para < 10)', exampleHanzi: '几岁？', examplePinyin: 'Jǐ suì?', exampleEs: '¿Cuántos años? (a un niño)' },
        { id: 'v3-26', hanzi: '多少', pinyin: 'duōshao', es: '¿Cuántos? (para > 10)', exampleHanzi: '多少钱？', examplePinyin: 'Duōshao qián?', exampleEs: '¿Cuánto dinero?' },
        { id: 'v3-27', hanzi: '岁', pinyin: 'suì', es: 'Años de edad', exampleHanzi: '我二十岁', examplePinyin: 'Wǒ èrshí suì', exampleEs: 'Tengo 20 años' }
      ],
      grammar: [
        {
          id: 'g3-1',
          title: 'El Orden Jerárquico Universal del Tiempo Chino',
          formula: 'Año + Mes + Día (号) + Día de la semana + Hora + Minuto',
          formulaTokens: [
            { text: 'Año (2026年)', role: 'time', description: 'Lo más grande' },
            { text: 'Mes (10月)', role: 'time' },
            { text: 'Día (14号)', role: 'time' },
            { text: 'Día semana (星期三)', role: 'time' },
            { text: 'Hora (三点)', role: 'time', description: 'Lo más específico' }
          ],
          explanation: 'La mentalidad china organiza la realidad siempre de lo macro a lo micro (del universo al detalle puntual). Por eso, las fechas siempre van en orden descendente: Año ➔ Mes ➔ Día.',
          rulesHighlight: [
            'Los meses se forman simplemente con el número + 月: 一月 (enero), 二月 (febrero)... 十二月 (diciembre).',
            'Los días de la semana con 星期 + número: 星期一 (lunes)... 星期六 (sábado), y el domingo es 星期天 o 星期日.'
          ],
          examples: [
            { hanzi: '今天是十月十五号。', pinyin: 'Jīntiān shì shí yuè shíwǔ hào.', es: 'Hoy es 15 de octubre.' },
            { hanzi: '明天是星期六。', pinyin: 'Míngtiān shì xīngqīliù.', es: 'Mañana es sábado.' },
            { hanzi: '现在是下午两点。', pinyin: 'Xiànzài shì xiàwǔ liǎng diǎn.', es: 'Ahora son las 2 de la tarde.' }
          ]
        },
        {
          id: 'g3-2',
          title: 'Decir la Hora y Minutos (点 diǎn y 分 fēn)',
          formula: 'Número + 点 (diǎn) + [Número + 分 (fēn)]',
          formulaTokens: [
            { text: 'Hora (三 / 八 / 两)', role: 'number' },
            { text: '点 (diǎn - hora)', role: 'time' },
            { text: 'Minuto (十五 / 三十)', role: 'number' },
            { text: '分 (fēn - minuto)', role: 'time' }
          ],
          explanation: 'Para decir la hora, usas el número seguido de 点 (diǎn). Las 2:00 siempre se dice 两点 (liǎng diǎn), nunca 二点. Para preguntar la hora: 现在几点？ (¿Qué hora es ahora?).',
          rulesHighlight: [
            'Las 2 en punto: 两点 (liǎng diǎn).',
            'Media hora se puede decir 半 (bàn): 三点半 (3:30).'
          ],
          examples: [
            { hanzi: '现在八点十分。', pinyin: 'Xiànzài bā diǎn shí fēn.', es: 'Ahora son las 8:10.' },
            { hanzi: '我们两点见。', pinyin: 'Wǒmen liǎng diǎn jiàn.', es: 'Nos vemos a las 2:00.' },
            { hanzi: '现在几点了？', pinyin: 'Xiànzài jǐ diǎn le?', es: '¿Qué hora es ya?' }
          ]
        },
        {
          id: 'g3-3',
          title: 'Diferencia entre 几 (jǐ) y 多少 (duōshao) y Preguntar la Edad',
          formula: 'Sujeto + 几岁？ / Sujeto + 多大？',
          formulaTokens: [
            { text: 'Sujeto (你 / 他 / 孩子)', role: 'subject' },
            { text: '几岁？ (jǐ suì - niños)', role: 'verb' },
            { text: '多大？ (duō dà - adultos)', role: 'verb' }
          ],
          explanation: '几 (jǐ) se usa cuando la respuesta esperada es un número pequeño (menor a 10), mientras que 多少 (duōshao) se usa para cantidades mayores a 10 o indefinidas (como dinero o teléfonos). Para la edad de niños se usa 几岁, y para jóvenes o adultos se pregunta 你多大？.',
          rulesHighlight: [
            'Respuesta de edad: Sujeto + Número + 岁 (sin verbo 是 obligatorio). Ej: 我二十五岁 (Tengo 25 años).'
          ],
          examples: [
            { hanzi: '你今年几岁？', pinyin: 'Nǐ jīnnián jǐ suì?', es: '¿Cuántos años tienes? (a un niño)' },
            { hanzi: '你多大了？', pinyin: 'Nǐ duō dà le?', es: '¿Qué edad tienes?' },
            { hanzi: '我十八岁。', pinyin: 'Wǒ shíbā suì.', es: 'Tengo 18 años.' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e3-1',
          type: 'multiple_choice',
          question: '¿Cómo se dice correctamente "las dos en punto" al decir la hora?',
          options: [
            '两点 (liǎng diǎn)',
            '二点 (èr diǎn)',
            '两个点 (liǎng gè diǎn)',
            '第二点 (dì èr diǎn)'
          ],
          correctIndex: 0,
          explanation: 'Para la hora 2:00 se usa siempre 两 (liǎng), dando 两点 (liǎng diǎn).'
        },
        {
          id: 'e3-2',
          type: 'sentence_builder',
          prompt: 'Ordena la fecha de mayor a menor: "Hoy es 15 de octubre"',
          tokens: ['今天', '是', '十月', '十五号', '。'],
          correctOrder: ['今天', '是', '十月', '十五号', '。'],
          pinyinHint: 'Jīntiān shì shí yuè shíwǔ hào.',
          translation: 'Hoy es 15 de octubre.',
          explanation: 'En chino el mes (十月) antecede obligatoriamente al día (十五号).'
        },
        {
          id: 'e3-3',
          type: 'listening',
          audioText: '现在三点十分',
          question: 'Escucha el audio y selecciona la hora exacta mencionada:',
          options: [
            'Son las 3:10',
            'Son las 10:03',
            'Son las 2:15',
            'Son las 4:05'
          ],
          correctIndex: 0,
          pinyinHint: 'Xiànzài sān diǎn shí fēn',
          explanation: '三点 (las 3 en punto) + 十分 (diez minutos).'
        },
        {
          id: 'e3-4',
          type: 'tone_challenge',
          hanzi: '岁',
          pinyinWithoutTone: 'sui',
          options: [
            '1.er tono (suī)',
            '2.do tono (suí)',
            '3.er tono (suǐ)',
            '4.to tono (suì - enérgico descendente)'
          ],
          correctIndex: 3,
          correctPinyin: 'suì',
          explanation: '岁 (años de edad) se pronuncia en 4.to tono: suì.'
        },
        {
          id: 'e3-5',
          type: 'sentence_builder',
          prompt: 'Ordena la pregunta: "¿Cuántos años tienes este año?"',
          tokens: ['你', '今年', '多大', '了', '？'],
          correctOrder: ['你', '今年', '多大', '了', '？'],
          pinyinHint: 'Nǐ jīnnián duō dà le?',
          translation: '¿Cuántos años tienes?',
          explanation: 'Sujeto (你) + Temporal (今年) + Interrogativo de edad (多大) + 了 + ？'
        }
      ]
    },
    {
      id: 'hsk1-m4',
      number: 4,
      title: 'Comida, Bebidas, Compras y Clasificadores',
      subtitle: 'Comer 吃, beber 喝, el verbo modal 想, clasificadores indispensables y cuánto cuesta 多少钱.',
      description: 'Pide comida en un restaurante, compra artículos en la tienda y domina el concepto clave de los clasificadores chinos.',
      phoneticsGuide: [
        {
          id: 'p4-1',
          concept: 'Diferencia de Pronunciación entre 买 (mǎi) y 卖 (mài)',
          rule: '买 (comprar) es 3.er tono (mǎi - grave y bajo). 卖 (vender) es 4.to tono (mài - tajante hacia abajo).',
          example: 'mǎi (买 - comprar) vs mài (卖 - vender)',
          pinyin: 'mǎi vs mài',
          audioText: '买 卖',
          spanishTip: '¡Una confusión de tono puede convertir "quiero comprar" en "quiero vender"!'
        },
        {
          id: 'p4-2',
          concept: 'Las Consonantes Chinas CH y SH (Retroflexas)',
          rule: 'En 吃 (chī - comer) y 水 (shuǐ - agua), la lengua se curva suavemente hacia atrás tocando el paladar duro.',
          example: 'chī (吃 - comer), shuǐ (水 - agua)',
          pinyin: 'chī, shuǐ, chá',
          audioText: '吃 水 茶',
          spanishTip: 'Pronuncia "ch" y "sh" doblando la punta de la lengua como si quisieras tocar la campanilla.'
        }
      ],
      vocabulary: [
        { id: 'v4-1', hanzi: '吃', pinyin: 'chī', es: 'Comer', exampleHanzi: '吃饭', examplePinyin: 'Chī fàn', exampleEs: 'Comer comida / Comer arroz' },
        { id: 'v4-2', hanzi: '喝', pinyin: 'hē', es: 'Beber / Tomar', exampleHanzi: '喝水', examplePinyin: 'Hē shuǐ', exampleEs: 'Beber agua' },
        { id: 'v4-3', hanzi: '水', pinyin: 'shuǐ', es: 'Agua', exampleHanzi: '喝茶还是喝水？', examplePinyin: 'Hē chá háishì hē shuǐ?', exampleEs: '¿Tomas té o agua?' },
        { id: 'v4-4', hanzi: '茶', pinyin: 'chá', es: 'Té', exampleHanzi: '中国茶', examplePinyin: 'Zhōngguó chá', exampleEs: 'Té chino' },
        { id: 'v4-5', hanzi: '米饭', pinyin: 'mǐfàn', es: 'Arroz cocido', exampleHanzi: '我吃米饭', examplePinyin: 'Wǒ chī mǐfàn', exampleEs: 'Como arroz' },
        { id: 'v4-6', hanzi: '菜', pinyin: 'cài', es: 'Plato / Comida / Verdura', exampleHanzi: '中国菜很好吃', examplePinyin: 'Zhōngguó cài hěn hǎochī', exampleEs: 'La comida china es muy rica' },
        { id: 'v4-7', hanzi: '水果', pinyin: 'shuǐguǒ', es: 'Fruta', exampleHanzi: '我喜欢吃水果', examplePinyin: 'Wǒ xǐhuan chī shuǐguǒ', exampleEs: 'Me gusta comer fruta' },
        { id: 'v4-8', hanzi: '苹果', pinyin: 'píngguǒ', es: 'Manzana', exampleHanzi: '买三个苹果', examplePinyin: 'Mǎi sān gè píngguǒ', exampleEs: 'Comprar tres manzanas' },
        { id: 'v4-9', hanzi: '杯子', pinyin: 'bēizi', es: 'Vaso / Taza', exampleHanzi: '一个杯子', examplePinyin: 'Yí gè bēizi', exampleEs: 'Un vaso' },
        { id: 'v4-10', hanzi: '钱', pinyin: 'qián', es: 'Dinero', exampleHanzi: '多少钱？', examplePinyin: 'Duōshao qián?', exampleEs: '¿Cuánto dinero cuesta?' },
        { id: 'v4-11', hanzi: '块', pinyin: 'kuài', es: 'Yuan (moneda oral china)', exampleHanzi: '五块钱', examplePinyin: 'Wǔ kuài qián', exampleEs: 'Cinco yuanes' },
        { id: 'v4-12', hanzi: '元', pinyin: 'yuán', es: 'Yuan (moneda formal escrita)', exampleHanzi: '十元', examplePinyin: 'Shí yuán', exampleEs: 'Diez yuanes' },
        { id: 'v4-13', hanzi: '买', pinyin: 'mǎi', es: 'Comprar', exampleHanzi: '你想买什么？', examplePinyin: 'Nǐ xiǎng mǎi shénme?', exampleEs: '¿Qué deseas comprar?' },
        { id: 'v4-14', hanzi: '东西', pinyin: 'dōngxi', es: 'Cosa / Objeto', exampleHanzi: '买东西', examplePinyin: 'Mǎi dōngxi', exampleEs: 'Hacer compras' },
        { id: 'v4-15', hanzi: '个', pinyin: 'gè', es: 'Clasificador universal (personas, frutas)', exampleHanzi: '一个苹果', examplePinyin: 'Yí gè píngguǒ', exampleEs: 'Una manzana' },
        { id: 'v4-16', hanzi: '本', pinyin: 'běn', es: 'Clasificador para libros y tomos', exampleHanzi: '一本书', examplePinyin: 'Yì běn shū', exampleEs: 'Un libro' },
        { id: 'v4-17', hanzi: '些', pinyin: 'xiē', es: 'Algunos / Unos pocos (clasificador plural)', exampleHanzi: '这些东西', examplePinyin: 'Zhèxiē dōngxi', exampleEs: 'Estas cosas' },
        { id: 'v4-18', hanzi: '想', pinyin: 'xiǎng', es: 'Desear / Querer / Pensar', exampleHanzi: '我想喝茶', examplePinyin: 'Wǒ xiǎng hē chá', exampleEs: 'Deseo tomar té' },
        { id: 'v4-19', hanzi: '商店', pinyin: 'shāngdiàn', es: 'Tienda / Comercio', exampleHanzi: '去商店', examplePinyin: 'Qù shāngdiàn', exampleEs: 'Ir a la tienda' },
        { id: 'v4-20', hanzi: '太...了', pinyin: 'tài...le', es: 'Demasiado / Súper', exampleHanzi: '太贵了！', examplePinyin: 'Tài guì le!', exampleEs: '¡Demasiado caro!' }
      ],
      grammar: [
        {
          id: 'g4-1',
          title: 'Uso Obligatorio de Clasificadores (Palabras de Medida)',
          formula: 'Número / Demostrativo + Clasificador + Sustantivo',
          formulaTokens: [
            { text: 'Número (三) / Este (这)', role: 'number' },
            { text: 'Clasificador (个 / 本 / 块)', role: 'measure' },
            { text: 'Sustantivo (苹果 / 书 / 钱)', role: 'object' }
          ],
          explanation: 'En chino no puedes decir directamente "un libro" (*一书). Es gramaticalmente obligatorio intercalar un clasificador que describe la forma o categoría del objeto. Para libros se usa 本 (běn), para dinero 块 (kuài), y para la mayoría de objetos comunes y personas se usa 个 (gè).',
          rulesHighlight: [
            'Un libro: 一本书 (Yì běn shū) — nunca *一书.',
            'Tres personas: 三个人 (Sān gè rén).',
            'Cinco yuanes: 五块钱 (Wǔ kuài qián).'
          ],
          examples: [
            { hanzi: '我想买一本书。', pinyin: 'Wǒ xiǎng mǎi yì běn shū.', es: 'Quiero comprar un libro.' },
            { hanzi: '请给我一个苹果。', pinyin: 'Qǐng gěi wǒ yí gè píngguǒ.', es: 'Por favor dame una manzana.' },
            { hanzi: '桌子上有三个杯子。', pinyin: 'Zhuōzi shàng yǒu sān gè bēizi.', es: 'Hay tres vasos en la mesa.' }
          ]
        },
        {
          id: 'g4-2',
          title: 'El Verbo Modal 想 (xiǎng - desear / querer hacer algo)',
          formula: 'Sujeto + 想 + Verbo + Objeto',
          formulaTokens: [
            { text: 'Sujeto (我 / 他)', role: 'subject' },
            { text: '想 (xiǎng - querer)', role: 'verb' },
            { text: 'Verbo (吃 / 喝 / 买)', role: 'verb' },
            { text: 'Objeto (中国菜 / 茶)', role: 'object' }
          ],
          explanation: '想 (xiǎng) expresa una intención educada, deseo o anhelo de hacer algo ("me gustaría", "quiero"). Su negación es 不想 (bù xiǎng - no tener ganas de).',
          rulesHighlight: [
            'Afirmativo: 我想喝水 (Quiero beber agua).',
            'Negativo: 我不想吃米饭 (No quiero comer arroz).'
          ],
          examples: [
            { hanzi: '你想吃什么？', pinyin: 'Nǐ xiǎng chī shénme?', es: '¿Qué te gustaría comer?' },
            { hanzi: '我想喝中国茶。', pinyin: 'Wǒ xiǎng hē Zhōngguó chá.', es: 'Me gustaría tomar té chino.' },
            { hanzi: '下午我想去商店。', pinyin: 'Xiàwǔ wǒ xiǎng qù shāngdiàn.', es: 'Por la tarde quiero ir a la tienda.' }
          ]
        },
        {
          id: 'g4-3',
          title: 'Preguntar Precios con 多少钱 (duōshao qián)',
          formula: '[Objeto] + 多少钱 ？',
          formulaTokens: [
            { text: 'Objeto (这个杯子 / 苹果)', role: 'object' },
            { text: '多少钱？ (duōshao qián)', role: 'verb' }
          ],
          explanation: 'Para saber el precio de cualquier mercancía, simplemente nombras el objeto (usando demostrativo + clasificador) y le añades 多少钱 (¿cuánto dinero?).',
          rulesHighlight: [
            'Pregunta: 这个多少钱？ (¿Cuánto cuesta este?)',
            'Respuesta: 十块钱 (10 yuanes).'
          ],
          examples: [
            { hanzi: '这个苹果多少钱？', pinyin: 'Zhè ge píngguǒ duōshao qián?', es: '¿Cuánto cuesta esta manzana?' },
            { hanzi: '那本书二十块钱。', pinyin: 'Nà běn shū èrshí kuài qián.', es: 'Aquel libro cuesta 20 yuanes.' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e4-1',
          type: 'multiple_choice',
          question: '¿Cuál es el clasificador obligatorio que se debe usar para libros en chino?',
          options: [
            '本 (běn)',
            '个 (gè)',
            '块 (kuài)',
            '只 (zhī)'
          ],
          correctIndex: 0,
          explanation: 'El clasificador para libros, revistas y tomos encuadernados es 本 (běn), como en 一本书 (un libro).'
        },
        {
          id: 'e4-2',
          type: 'sentence_builder',
          prompt: 'Ordena la frase: "Quiero comprar tres manzanas"',
          tokens: ['我', '想', '买', '三个', '苹果', '。'],
          correctOrder: ['我', '想', '买', '三个', '苹果', '。'],
          pinyinHint: 'Wǒ xiǎng mǎi sān gè píngguǒ.',
          translation: 'Quiero comprar tres manzanas.',
          explanation: 'Sujeto (我) + Modal (想) + Verbo (买) + Número y clasificador (三个) + Objeto (苹果)。'
        },
        {
          id: 'e4-3',
          type: 'listening',
          audioText: '这个杯子多少钱',
          question: 'Escucha el audio y responde a qué se refiere la pregunta:',
          options: [
            '¿Cuánto cuesta este vaso?',
            '¿Dónde compraste este plato?',
            '¿De quién es esta taza?',
            '¿Quieres beber agua?'
          ],
          correctIndex: 0,
          pinyinHint: 'Zhè ge bēizi duōshao qián?',
          explanation: 'Zhè ge bēizi (este vaso) + duōshao qián (cuánto dinero cuesta).'
        },
        {
          id: 'e4-4',
          type: 'tone_challenge',
          hanzi: '买',
          pinyinWithoutTone: 'mai',
          options: [
            '1.er tono (māi)',
            '2.do tono (mái)',
            '3.er tono (mǎi - bajar y subir)',
            '4.to tono (mài - tajante vender)'
          ],
          correctIndex: 2,
          correctPinyin: 'mǎi',
          explanation: '买 (comprar) es 3.er tono (mǎi). No confundir con 卖 (mài, 4.to tono, vender).'
        },
        {
          id: 'e4-5',
          type: 'multiple_choice',
          question: '¿Cómo se dice en chino "Me gustaría beber té chino"?',
          options: [
            '我想喝中国茶 (Wǒ xiǎng hē Zhōngguó chá)',
            '我是喝中国茶 (Wǒ shì hē Zhōngguó chá)',
            '我没有喝中国茶 (Wǒ méiyǒu hē Zhōngguó chá)',
            '我吃中国茶 (Wǒ chī Zhōngguó chá)'
          ],
          correctIndex: 0,
          explanation: 'El verbo beber es 喝 (hē) y desear es 想 (xiǎng): 我想喝中国茶。'
        }
      ]
    },
    {
      id: 'hsk1-m5',
      number: 5,
      title: 'Ubicación, Direcciones, Transporte y Trabajo',
      subtitle: 'El verbo 在 (estar en), medios de transporte con 坐, profesiones y lugares de la ciudad.',
      description: 'Aprende a indicar dónde estás, dónde realizas actividades, cómo moverte en taxi o avión y a hablar de tu profesión.',
      phoneticsGuide: [
        {
          id: 'p5-1',
          concept: 'Las Iniciales J, Q, X vs ZH, CH, SH',
          rule: 'J, Q, X solo se combinan con vocales "i" y "ü". La lengua está plana contra los dientes inferiores. ZH, CH, SH tienen la lengua curvada hacia atrás.',
          example: 'qù (去 - ir), fēijī (飞机 - avión)',
          pinyin: 'qù, fēijī',
          audioText: '去 飞机 学校',
          spanishTip: 'Para "x" sonríe ampliamente con la lengua abajo; para "sh" pon los labios redondeados con la lengua atrás.'
        },
        {
          id: 'p5-2',
          concept: 'El Tono Neutro en Posposiciones de Lugar',
          rule: 'En palabras de posición como 前面 (qiánmian - adelante) y 后面 (hòumian - atrás), la sílaba 面 se pronuncia átona y suave.',
          example: 'qiánmian (前面), hòumian (后面)',
          pinyin: 'qiánmian, hòumian',
          audioText: '前面 后面',
          spanishTip: 'Acentúa solo la primera palabra y deja caer la segunda sin esfuerzo.'
        }
      ],
      vocabulary: [
        { id: 'v5-1', hanzi: '在', pinyin: 'zài', es: 'Estar en / En (preposición)', exampleHanzi: '我在学校', examplePinyin: 'Wǒ zài xuéxiào', exampleEs: 'Estoy en la escuela' },
        { id: 'v5-2', hanzi: '哪儿', pinyin: 'nǎr', es: '¿Dónde? (forma con erre de Pekín)', exampleHanzi: '你在哪儿？', examplePinyin: 'Nǐ zài nǎr?', exampleEs: '¿Dónde estás?' },
        { id: 'v5-3', hanzi: '哪里', pinyin: 'nǎlǐ', es: '¿Dónde? (forma estándar meridional)', exampleHanzi: '医院在哪里？', examplePinyin: 'Yīyuàn zài nǎlǐ?', exampleEs: '¿Dónde está el hospital?' },
        { id: 'v5-4', hanzi: '去', pinyin: 'qù', es: 'Ir', exampleHanzi: '去北京', examplePinyin: 'Qù Běijīng', exampleEs: 'Ir a Pekín' },
        { id: 'v5-5', hanzi: '回', pinyin: 'huí', es: 'Regresar / Volver', exampleHanzi: '回家', examplePinyin: 'Huí jiā', exampleEs: 'Volver a casa' },
        { id: 'v5-6', hanzi: '来', pinyin: 'lái', es: 'Venir', exampleHanzi: '来学校', examplePinyin: 'Lái xuéxiào', exampleEs: 'Venir a la escuela' },
        { id: 'v5-7', hanzi: '学校', pinyin: 'xuéxiào', es: 'Escuela / Colegio / Universidad', exampleHanzi: '我们在学校学习', examplePinyin: 'Wǒmen zài xuéxiào xuéxí', exampleEs: 'Estudiamos en la escuela' },
        { id: 'v5-8', hanzi: '医院', pinyin: 'yīyuàn', es: 'Hospital', exampleHanzi: '去医院看医生', examplePinyin: 'Qù yīyuàn kàn yīshēng', exampleEs: 'Ir al hospital a ver al médico' },
        { id: 'v5-9', hanzi: '饭店', pinyin: 'fàndiàn', es: 'Restaurante / Hotel', exampleHanzi: '在饭店吃中国菜', examplePinyin: 'Zài fàndiàn chī Zhōngguó cài', exampleEs: 'Comer comida china en el restaurante' },
        { id: 'v5-10', hanzi: '北京', pinyin: 'Běijīng', es: 'Pekín (Capital del Norte)', exampleHanzi: '我想去北京', examplePinyin: 'Wǒ xiǎng qù Běijīng', exampleEs: 'Quiero ir a Pekín' },
        { id: 'v5-11', hanzi: '上', pinyin: 'shàng', es: 'Sobre / Arriba / Encima', exampleHanzi: '桌子上', examplePinyin: 'Zhuōzi shàng', exampleEs: 'Sobre la mesa' },
        { id: 'v5-12', hanzi: '下', pinyin: 'xià', es: 'Debajo / Abajo', exampleHanzi: '椅子下', examplePinyin: 'Yǐzi xià', exampleEs: 'Debajo de la silla' },
        { id: 'v5-13', hanzi: '里', pinyin: 'lǐ', es: 'Dentro / En el interior', exampleHanzi: '学校里', examplePinyin: 'Xuéxiào lǐ', exampleEs: 'Dentro de la escuela' },
        { id: 'v5-14', hanzi: '前面', pinyin: 'qiánmian', es: 'Delante / En frente', exampleHanzi: '在我前面', examplePinyin: 'Zài wǒ qiánmian', exampleEs: 'Delante de mí' },
        { id: 'v5-15', hanzi: '后面', pinyin: 'hòumian', es: 'Detrás / Atrás', exampleHanzi: '饭店后面', examplePinyin: 'Fàndiàn hòumian', exampleEs: 'Detrás del restaurante' },
        { id: 'v5-16', hanzi: '坐', pinyin: 'zuò', es: 'Sentarse / Ir en (transporte)', exampleHanzi: '坐出租车', examplePinyin: 'Zuò chūzūchē', exampleEs: 'Tomar un taxi / Ir en taxi' },
        { id: 'v5-17', hanzi: '飞机', pinyin: 'fēijī', es: 'Avión (lit: máquina voladora)', exampleHanzi: '坐飞机去中国', examplePinyin: 'Zuò fēijī qù Zhōngguó', exampleEs: 'Ir a China en avión' },
        { id: 'v5-18', hanzi: '出租车', pinyin: 'chūzūchē', es: 'Taxi', exampleHanzi: '我们坐出租车去', examplePinyin: 'Wǒmen zuò chūzūchē qù', exampleEs: 'Vamos en taxi' },
        { id: 'v5-19', hanzi: '工作', pinyin: 'gōngzuò', es: 'Trabajar / Trabajo', exampleHanzi: '你在哪儿工作？', examplePinyin: 'Nǐ zài nǎr gōngzuò?', exampleEs: '¿Dónde trabajas?' },
        { id: 'v5-20', hanzi: '医生', pinyin: 'yīshēng', es: 'Médico / Doctor', exampleHanzi: '他爸爸是医生', examplePinyin: 'Tā bàba shì yīshēng', exampleEs: 'Su papá es médico' },
        { id: 'v5-21', hanzi: '怎么', pinyin: 'zěnme', es: '¿Cómo? / ¿De qué manera?', exampleHanzi: '你怎么去学校？', examplePinyin: 'Nǐ zěnme qù xuéxiào?', exampleEs: '¿Cómo vas a la escuela?' }
      ],
      grammar: [
        {
          id: 'g5-1',
          title: 'El Verbo y Preposición de Lugar 在 (zài - estar en)',
          formula: 'Sujeto + 在 + Lugar + [Verbo + Objeto]',
          formulaTokens: [
            { text: 'Sujeto (我 / 医生)', role: 'subject' },
            { text: '在 (zài - en)', role: 'verb' },
            { text: 'Lugar (学校 / 医院)', role: 'place' },
            { text: 'Acción (工作 / 吃饭)', role: 'verb', description: 'Opcional si es frase completa' }
          ],
          explanation: '¡Regla de oro de la sintaxis china!: En español solemos decir "Yo trabajo en el hospital" (poniendo el lugar al final). En chino mandarín, el LUGAR SIEMPRE VA ANTES DE LA ACCIÓN. Primero te sitúas en el escenario (在 Lugar), y luego ejecutas el verbo.',
          rulesHighlight: [
            'Ubicación simple: 我在学校 (Estoy en la escuela).',
            'Acción en un lugar: 我在学校学习 (Yo en la escuela estudio).',
            '¡ERROR en español!: *我学习在学校 (Incorrecto en chino estándar).'
          ],
          examples: [
            { hanzi: '我在医院工作。', pinyin: 'Wǒ zài yīyuàn gōngzuò.', es: 'Trabajo en el hospital (lit: Yo en el hospital trabajo).' },
            { hanzi: '你在哪儿吃饭？', pinyin: 'Nǐ zài nǎr chī fàn?', es: '¿Dónde comes?' },
            { hanzi: '老师在前面。', pinyin: 'Lǎoshī zài qiánmian.', es: 'El profesor está en frente.' }
          ]
        },
        {
          id: 'g5-2',
          title: 'Estructura de Medio de Transporte y Desplazamiento',
          formula: 'Sujeto + 坐 + [Medio de Transporte] + 去/来 + Lugar',
          formulaTokens: [
            { text: 'Sujeto (我 / 我们)', role: 'subject' },
            { text: '坐 (zuò - en / abordar)', role: 'verb' },
            { text: 'Transporte (飞机 / 出租车)', role: 'object' },
            { text: '去 / 来 (ir / venir)', role: 'verb' },
            { text: 'Destino (北京 / 学校)', role: 'place' }
          ],
          explanation: 'Para decir que viajas en un medio de transporte, se usa el verbo 坐 (zuò - sentarse / viajar en) antes del verbo de movimiento principal (去 o 来).',
          rulesHighlight: [
            'En avión: 坐飞机去 (Ir en avión).',
            'En taxi: 坐出租车去 (Ir en taxi).'
          ],
          examples: [
            { hanzi: '我坐飞机去北京。', pinyin: 'Wǒ zuò fēijī qù Běijīng.', es: 'Voy a Pekín en avión.' },
            { hanzi: '我们坐出租车去饭店。', pinyin: 'Wǒmen zuò chūzūchē qù fàndiàn.', es: 'Vamos al restaurante en taxi.' }
          ]
        },
        {
          id: 'g5-3',
          title: 'Posposiciones Espaciales (Sustantivo + 上 / 下 / 里)',
          formula: 'Sustantivo + 上 / 下 / 里 / 前面 / 后面',
          formulaTokens: [
            { text: 'Sustantivo (桌子 / 椅子 / 学校)', role: 'object' },
            { text: 'Posposición (上 / 下 / 里 / 前面)', role: 'place' }
          ],
          explanation: 'A diferencia del español ("encima de la mesa"), en chino la palabra de orientación va DETRÁS del sustantivo: 桌子上 (Mesa-arriba = sobre la mesa).',
          rulesHighlight: [
            'Sobre la mesa: 桌子上 (zhuōzi shàng).',
            'Debajo de la silla: 椅子下 (yǐzi xià).',
            'Dentro de la casa / En casa: 家里 (jiā lǐ).'
          ],
          examples: [
            { hanzi: '电脑在桌子上。', pinyin: 'Diànnǎo zài zhuōzi shàng.', es: 'El ordenador está sobre la mesa.' },
            { hanzi: '他在学校后面。', pinyin: 'Tā zài xuéxiào hòumian.', es: 'Él está detrás de la escuela.' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e5-1',
          type: 'multiple_choice',
          question: '¿Cuál es el orden sintáctico correcto para decir en chino: "Mi hermano trabaja en el hospital"?',
          options: [
            'Sujeto + 在 hospital + trabajar (我哥哥在医院工作)',
            'Sujeto + trabajar + 在 hospital (我哥哥工作在医院)',
            '在 hospital + trabajar + Sujeto (在医院工作我哥哥)',
            'Sujeto + 是 hospital + trabajar (我哥哥是医院工作)'
          ],
          correctIndex: 0,
          explanation: 'En chino el lugar con 在 precede rigurosamente al verbo de acción: 我哥哥 (Sujeto) + 在医院 (Lugar) + 工作 (Acción).'
        },
        {
          id: 'e5-2',
          type: 'sentence_builder',
          prompt: 'Ordena la frase: "Voy a Pekín en avión"',
          tokens: ['我', '坐', '飞机', '去', '北京', '。'],
          correctOrder: ['我', '坐', '飞机', '去', '北京', '。'],
          pinyinHint: 'Wǒ zuò fēijī qù Běijīng.',
          translation: 'Voy a Pekín en avión.',
          explanation: 'Estructura: Sujeto (我) + 坐 飞机 (transporte) + 去 北京 (destino) + 。'
        },
        {
          id: 'e5-3',
          type: 'listening',
          audioText: '他在学校前面',
          question: 'Escucha el audio y elige dónde está él:',
          options: [
            'Delante de la escuela',
            'Detrás del hospital',
            'Dentro del restaurante',
            'Arriba del avión'
          ],
          correctIndex: 0,
          pinyinHint: 'Tā zài xuéxiào qiánmian',
          explanation: '前面 (qiánmian) significa delante o en frente.'
        },
        {
          id: 'e5-4',
          type: 'tone_challenge',
          hanzi: '去',
          pinyinWithoutTone: 'qu',
          options: [
            '1.er tono (qū)',
            '2.do tono (qú)',
            '3.er tono (qǔ)',
            '4.to tono (qù - cortante y firme)'
          ],
          correctIndex: 3,
          correctPinyin: 'qù',
          explanation: '去 (ir) se pronuncia en 4.to tono enérgico: qù.'
        },
        {
          id: 'e5-5',
          type: 'sentence_builder',
          prompt: 'Ordena la pregunta: "¿Dónde está el médico?"',
          tokens: ['医生', '在', '哪儿', '？'],
          correctOrder: ['医生', '在', '哪儿', '？'],
          pinyinHint: 'Yīshēng zài nǎr?',
          translation: '¿Dónde está el médico?',
          explanation: 'Sujeto (医生) + Verbo estar (在) + Interrogativo de lugar (哪儿) + ？'
        }
      ]
    },
    {
      id: 'hsk1-m6',
      number: 6,
      title: 'Clima, Adjetivos, Habilidades y Pasado/Progreso',
      subtitle: 'Predicados adjetivales con 很, verbo modal 会, la partícula 了 y acciones en curso con 呢.',
      description: 'El último escalón de HSK 1: describe cómo es algo (¡sin usar 是!), habla de habilidades aprendidas y expresa cambios o acciones terminadas.',
      phoneticsGuide: [
        {
          id: 'p6-1',
          concept: 'El Tono Neutro en Partículas Gramaticales (了 le, 呢 ne)',
          rule: 'Las partículas modales y aspectuales al final de la frase no tienen altura tonal propia; se pronuncian con la menor fuerza posible.',
          example: 'le (了), ne (呢)',
          pinyin: 'xiàyǔ le, nǐ ne',
          audioText: '下雨了 你呢',
          spanishTip: 'Déjalas salir como un suave suspiro o desinflado al final de la oración.'
        },
        {
          id: 'p6-2',
          concept: 'La Consonante H China (hěn, rè, hàn)',
          rule: 'No es muda como en español ni tampoco tan rasposa como la "j" de "jamón". Es una fricción suave en la garganta (fricativa velar).',
          example: 'hěn (很 - muy), hànyǔ (汉语 - idioma chino)',
          pinyin: 'hěn, hànyǔ',
          audioText: '很好 汉语',
          spanishTip: 'Como el sonido de limpiar unos anteojos empañándolos con tu aliento cálido: "haaa".'
        }
      ],
      vocabulary: [
        { id: 'v6-1', hanzi: '天气', pinyin: 'tiānqì', es: 'Clima / Tiempo meteorológico', exampleHanzi: '今天天气很好', examplePinyin: 'Jīntiān tiānqì hěn hǎo', exampleEs: 'Hoy el clima está muy bueno' },
        { id: 'v6-2', hanzi: '冷', pinyin: 'lěng', es: 'Frío', exampleHanzi: '太冷了', examplePinyin: 'Tài lěng le', exampleEs: 'Hace demasiado frío' },
        { id: 'v6-3', hanzi: '热', pinyin: 'rè', es: 'Caluroso / Calor', exampleHanzi: '今天不热', examplePinyin: 'Jīntiān bú rè', exampleEs: 'Hoy no hace calor' },
        { id: 'v6-4', hanzi: '下雨', pinyin: 'xiàyǔ', es: 'Llover', exampleHanzi: '明天不下雨', examplePinyin: 'Míngtiān bú xiàyǔ', exampleEs: 'Mañana no lloverá' },
        { id: 'v6-5', hanzi: '很', pinyin: 'hěn', es: 'Muy / Conector adjetival neutral', exampleHanzi: '他很高兴', examplePinyin: 'Tā hěn gāoxìng', exampleEs: 'Él está (muy) contento' },
        { id: 'v6-6', hanzi: '太', pinyin: 'tài', es: 'Demasiado / En extremo', exampleHanzi: '太好了！', examplePinyin: 'Tài hǎo le!', exampleEs: '¡Buenísimo! / ¡Excelente!' },
        { id: 'v6-7', hanzi: '大', pinyin: 'dà', es: 'Grande', exampleHanzi: '这个苹果很大', examplePinyin: 'Zhè ge píngguǒ hěn dà', exampleEs: 'Esta manzana es grande' },
        { id: 'v6-8', hanzi: '小', pinyin: 'xiǎo', es: 'Pequeño', exampleHanzi: '猫很小', examplePinyin: 'Māo hěn xiǎo', exampleEs: 'El gato es pequeño' },
        { id: 'v6-9', hanzi: '多', pinyin: 'duō', es: 'Mucho / Muchos', exampleHanzi: '人很多', examplePinyin: 'Rén hěn duō', exampleEs: 'Hay mucha gente' },
        { id: 'v6-10', hanzi: '少', pinyin: 'shǎo', es: 'Poco / Pocos', exampleHanzi: '钱太少了', examplePinyin: 'Qián tài shǎo le', exampleEs: 'El dinero es demasiado poco' },
        { id: 'v6-11', hanzi: '高兴', pinyin: 'gāoxìng', es: 'Alegre / Feliz / Encantado', exampleHanzi: '认识你很高兴', examplePinyin: 'Rènshi nǐ hěn gāoxìng', exampleEs: 'Encantado de conocerte' },
        { id: 'v6-12', hanzi: '漂亮', pinyin: 'piàoliang', es: 'Bonito(a) / Hermoso(a)', exampleHanzi: '她很漂亮', examplePinyin: 'Tā hěn piàoliang', exampleEs: 'Ella es muy hermosa' },
        { id: 'v6-13', hanzi: '好看', pinyin: 'hǎokàn', es: 'Lindo de ver / Agradable a la vista', exampleHanzi: '这本书很好看', examplePinyin: 'Zhè běn shū hěn hǎokàn', exampleEs: 'Este libro es muy ameno' },
        { id: 'v6-14', hanzi: '会', pinyin: 'huì', es: 'Saber hacer (habilidad aprendida)', exampleHanzi: '我会说汉语', examplePinyin: 'Wǒ huì shuō Hànyǔ', exampleEs: 'Sé hablar chino' },
        { id: 'v6-15', hanzi: '能', pinyin: 'néng', es: 'Poder (capacidad o permiso físico)', exampleHanzi: '我能坐这儿吗？', examplePinyin: 'Wǒ néng zuò zhèr ma?', exampleEs: '¿Puedo sentarme aquí?' },
        { id: 'v6-16', hanzi: '说', pinyin: 'shuō', es: 'Hablar / Decir', exampleHanzi: '他说中国话', examplePinyin: 'Tā shuō Zhōngguó huà', exampleEs: 'Él habla chino' },
        { id: 'v6-17', hanzi: '汉语', pinyin: 'Hànyǔ', es: 'Idioma chino mandarín', exampleHanzi: '学习汉语', examplePinyin: 'Xuéxí Hànyǔ', exampleEs: 'Aprender chino' },
        { id: 'v6-18', hanzi: '写', pinyin: 'xiě', es: 'Escribir', exampleHanzi: '写汉字', examplePinyin: 'Xiě hànzì', exampleEs: 'Escribir caracteres chinos' },
        { id: 'v6-19', hanzi: '读', pinyin: 'dú', es: 'Leer / Leer en voz alta', exampleHanzi: '读汉语书', examplePinyin: 'Dú Hànyǔ shū', exampleEs: 'Leer libros en chino' },
        { id: 'v6-20', hanzi: '听', pinyin: 'tīng', es: 'Escuchar / Oír', exampleHanzi: '听老师说', examplePinyin: 'Tīng lǎoshī shuō', exampleEs: 'Escuchar lo que dice el profesor' },
        { id: 'v6-21', hanzi: '看', pinyin: 'kàn', es: 'Mirar / Ver / Leer', exampleHanzi: '看电影', examplePinyin: 'Kàn diànyǐng', exampleEs: 'Ver películas' },
        { id: 'v6-22', hanzi: '汉字', pinyin: 'hànzì', es: 'Caracteres chinos', exampleHanzi: '汉字不难', examplePinyin: 'Hànzì bù nán', exampleEs: 'Los caracteres chinos no son difíciles' },
        { id: 'v6-23', hanzi: '字', pinyin: 'zì', es: 'Carácter / Letra / Palabra escrita', exampleHanzi: '这个字怎么读？', examplePinyin: 'Zhè ge zì zěnme dú?', exampleEs: '¿Cómo se lee este carácter?' },
        { id: 'v6-24', hanzi: '了', pinyin: 'le', es: 'Partícula de cambio de estado o acción cumplida', exampleHanzi: '他来了', examplePinyin: 'Tā lái le', exampleEs: 'Ya vino / Ha llegado' },
        { id: 'v6-25', hanzi: '呢', pinyin: 'ne', es: 'Partícula modal ("¿y tú?" o acción continua)', exampleHanzi: '你在看书呢', examplePinyin: 'Nǐ zài kàn shū ne', exampleEs: 'Estás leyendo libros en este momento' }
      ],
      grammar: [
        {
          id: 'g6-1',
          title: 'Oraciones de Predicado Adjetival (¡PROHIBIDO usar 是!)',
          formula: 'Sujeto + 很 + Adjetivo',
          formulaTokens: [
            { text: 'Sujeto (她 / 今天天气)', role: 'subject' },
            { text: '很 (hěn - conector neutro)', role: 'particle' },
            { text: 'Adjetivo (漂亮 / 冷 / 大)', role: 'adjective' }
          ],
          explanation: '¡LA TRAMPA MÁS COMÚN DEL HISPANOHABLANTE!: En español decimos "Ella ES bonita" o "El clima ES frío", usando el verbo ser. EN CHINO ESTÁ COMPLETAMENTE PROHIBIDO USAR 是 CON ADJETIVOS PUROS. El adjetivo funciona por sí mismo como verbo, unido casi siempre por 很 (hěn). En este contexto, 很 muchas veces no significa "extremadamente muy", sino que actúa como puente sintáctico.',
          rulesHighlight: [
            'Correcto: 她很漂亮 (Ella es hermosa).',
            'ERROR FATAL: *她是漂亮 (NUNCA digas esto).',
            'Forma negativa: Sujeto + 不 + Adjetivo (sin 很 ni 是). Ej: 他不高 (Él no es alto).'
          ],
          examples: [
            { hanzi: '今天天气很冷。', pinyin: 'Jīntiān tiānqì hěn lěng.', es: 'Hoy hace frío.' },
            { hanzi: '我很高兴。', pinyin: 'Wǒ hěn gāoxìng.', es: 'Estoy contento.' },
            { hanzi: '中国菜不贵。', pinyin: 'Zhōngguó cài bú guì.', es: 'La comida china no es cara.' }
          ]
        },
        {
          id: 'g6-2',
          title: 'Estructura de Exclamación y Grado Extremo: 太 + Adjetivo + 了',
          formula: '太 + Adjetivo + 了',
          formulaTokens: [
            { text: '太 (tài - demasiado / súper)', role: 'particle' },
            { text: 'Adjetivo (好 / 冷 / 贵)', role: 'adjective' },
            { text: '了 (le - partícula enfática)', role: 'particle' }
          ],
          explanation: 'Para enfatizar que algo es demasiado, extraordinario o fantástico, se encierra el adjetivo entre 太...了.',
          rulesHighlight: [
            '¡Excelente!: 太好了！ (Tài hǎo le!)',
            '¡Demasiado frío!: 太冷了！ (Tài lěng le!)',
            'En oraciones negativas (no tan...): 不太 + Adjetivo (sin 了). Ej: 不太冷 (no muy frío).'
          ],
          examples: [
            { hanzi: '汉字太有意思了！', pinyin: 'Hànzì tài yǒu yìsi le!', es: '¡Los caracteres chinos son interesantísimos!' },
            { hanzi: '今天太热了。', pinyin: 'Jīntiān tài rè le.', es: 'Hoy hace demasiado calor.' }
          ]
        },
        {
          id: 'g6-3',
          title: 'El Verbo Modal 会 (huì - saber hacer algo aprendido)',
          formula: 'Sujeto + 会 + Verbo + Objeto',
          formulaTokens: [
            { text: 'Sujeto (我 / 他)', role: 'subject' },
            { text: '会 (huì - saber / poder)', role: 'verb' },
            { text: 'Verbo (说 / 写 / 做)', role: 'verb' },
            { text: 'Objeto (汉语 / 汉字 / 中国菜)', role: 'object' }
          ],
          explanation: '会 (huì) denota una habilidad que se adquiere a través del estudio, la práctica y el aprendizaje consciente (como hablar un idioma, cocinar o nadar). Su negación es 不会 (bú huì).',
          rulesHighlight: [
            'Afirmativo: 我会说汉语 (Sé hablar chino).',
            'Negativo: 我不会写这个汉字 (No sé escribir este carácter).'
          ],
          examples: [
            { hanzi: '你会写汉字吗？', pinyin: 'Nǐ huì xiě hànzì ma?', es: '¿Sabes escribir caracteres chinos?' },
            { hanzi: '我不会做中国菜。', pinyin: 'Wǒ bú huì zuò Zhōngguó cài.', es: 'No sé cocinar comida china.' }
          ]
        }
      ],
      exercises: [
        {
          id: 'e6-1',
          type: 'multiple_choice',
          question: '¿Por qué la frase "*她是漂亮" (Ella es hermosa) es incorrecta en chino?',
          options: [
            'Porque el verbo 是 jamás se usa para enlazar adjetivos puros; se usa 很 (Tā hěn piàoliang)',
            'Porque 漂亮 sólo se usa con hombres',
            'Porque falta la partícula 吗 al final',
            'Porque 是 debe ir al final de la oración'
          ],
          correctIndex: 0,
          explanation: 'Regla de predicado adjetival: en chino los adjetivos funcionan como verbos estativos y se unen con 很. Usar 是 con un adjetivo simple es un error típico de traducción literal.'
        },
        {
          id: 'e6-2',
          type: 'sentence_builder',
          prompt: 'Ordena la frase: "Ella sabe hablar chino"',
          tokens: ['她', '会', '说', '汉语', '。'],
          correctOrder: ['她', '会', '说', '汉语', '。'],
          pinyinHint: 'Tā huì shuō Hànyǔ.',
          translation: 'Ella sabe hablar chino.',
          explanation: 'Sujeto (她) + Modal de habilidad aprendida (会) + Verbo (说) + Idioma (汉语) + 。'
        },
        {
          id: 'e6-3',
          type: 'listening',
          audioText: '今天天气太热了',
          question: 'Escucha el audio y selecciona la opción que mejor describe el clima:',
          options: [
            'Hoy hace demasiado calor',
            'Hoy está lloviendo mucho',
            'Hoy hace mucho frío',
            'El clima de ayer fue agradable'
          ],
          correctIndex: 0,
          pinyinHint: 'Jīntiān tiānqì tài rè le',
          explanation: '今天天气 (el clima de hoy) + 太热了 (demasiado caluroso).'
        },
        {
          id: 'e6-4',
          type: 'tone_challenge',
          hanzi: '冷',
          pinyinWithoutTone: 'leng',
          options: [
            '1.er tono (lēng)',
            '2.do tono (léng)',
            '3.er tono (lěng - grave bajo)',
            '4.to tono (lèng)'
          ],
          correctIndex: 2,
          correctPinyin: 'lěng',
          explanation: '冷 (frío) es 3.er tono (lěng).'
        },
        {
          id: 'e6-5',
          type: 'sentence_builder',
          prompt: 'Ordena la exclamación: "¡Buenísimo!" / "¡Excelente!"',
          tokens: ['太', '好', '了', '！'],
          correctOrder: ['太', '好', '了', '！'],
          pinyinHint: 'Tài hǎo le!',
          translation: '¡Excelente! / ¡Buenísimo!',
          explanation: 'Fórmula de exclamación: 太 + 好 + 了 + ！'
        }
      ]
    }
  ],
  finalExam: {
    passingScore: 80,
    timeLimitMinutes: 15,
    questions: [
      // SECCIÓN 1: COMPRENSIÓN AUDITIVA (5 PREGUNTAS CON AUDIO REAL)
      {
        id: 'q1',
        section: 'listening',
        type: 'multiple_choice',
        question: 'Sección 1: Comprensión Auditiva. Escucha el audio atentamente y elige la traducción exacta:',
        audioText: '他是我的中国朋友',
        options: [
          'Él es mi amigo chino',
          'Mi profesor de chino es él',
          'Yo tengo muchos amigos chinos',
          'Ella es mi compañera de clase'
        ],
        correctIndex: 0,
        explanation: 'Audio: "他是我的中国朋友" (Tā shì wǒ de Zhōngguó péngyou) = Él es mi amigo chino.'
      },
      {
        id: 'q2',
        section: 'listening',
        type: 'multiple_choice',
        question: 'Sección 1: Comprensión Auditiva. Escucha el audio y determina qué quiere hacer la persona:',
        audioText: '我想喝一杯水',
        options: [
          'Desea beber un vaso de agua',
          'Quiere comer un plato de arroz',
          'Va a comprar tres manzanas',
          'Desea tomar té caliente'
        ],
        correctIndex: 0,
        explanation: 'Audio: "我想喝一杯水" (Wǒ xiǎng hē yì bēi shuǐ) = Quiero beber un vaso de agua.'
      },
      {
        id: 'q3',
        section: 'listening',
        type: 'multiple_choice',
        question: 'Sección 1: Comprensión Auditiva. Escucha el audio sobre la ubicación:',
        audioText: '医生在医院工作',
        options: [
          'El médico trabaja en el hospital',
          'El profesor está en la escuela',
          'Mi padre fue al restaurante',
          'El estudiante trabaja en la tienda'
        ],
        correctIndex: 0,
        explanation: 'Audio: "医生在医院工作" (Yīshēng zài yīyuàn gōngzuò) = El médico trabaja en el hospital.'
      },
      {
        id: 'q4',
        section: 'listening',
        type: 'multiple_choice',
        question: 'Sección 1: Comprensión Auditiva. Escucha la hora mencionada:',
        audioText: '现在下午两点半',
        options: [
          'Son las 2:30 de la tarde',
          'Son las 12:00 del mediodía',
          'Son las 3:15 de la mañana',
          'Son las 8:30 de la noche'
        ],
        correctIndex: 0,
        explanation: 'Audio: "现在下午两点半" (Xiànzài xiàwǔ liǎng diǎn bàn) = Ahora son las 2 y media de la tarde.'
      },
      {
        id: 'q5',
        section: 'listening',
        type: 'multiple_choice',
        question: 'Sección 1: Comprensión Auditiva. Escucha la habilidad comunicada:',
        audioText: '你会写中国字吗？',
        options: [
          '¿Sabes escribir caracteres chinos?',
          '¿Sabes hablar chino mandarín?',
          '¿Lees libros en la escuela?',
          '¿Te gusta la caligrafía?'
        ],
        correctIndex: 0,
        explanation: 'Audio: "你会写中国字吗？" (Nǐ huì xiě Zhōngguó zì ma?) = ¿Sabes escribir caracteres chinos?'
      },

      // SECCIÓN 2: REGLAS FONÉTICAS, TONOS Y PINYIN (5 PREGUNTAS)
      {
        id: 'q6',
        section: 'phonetics',
        type: 'multiple_choice',
        question: 'Sección 2: Fonética y Tonos. ¿Qué ocurre fonéticamente cuando dos caracteres de 3.er tono van consecutivos como en "你好" (nǐ hǎo)?',
        options: [
          'El primer 3.er tono se pronuncia automáticamente como 2.do tono (ní hǎo)',
          'Ambos se convierten en 4.to tono tajante',
          'El segundo 3.er tono se elimina y pasa a tono neutro',
          'Permanecen inalterados y se deben pronunciar ambos en tono bajo'
        ],
        correctIndex: 0,
        explanation: 'Regla del cambio de 3.er tono: 3 + 3 ➔ 2 + 3. Se escribe "nǐ hǎo", pero se dice "ní hǎo".'
      },
      {
        id: 'q7',
        section: 'phonetics',
        type: 'multiple_choice',
        question: 'Sección 2: Fonética y Tonos. ¿Cuál es el tono original de la palabra 不 (bù) y cómo cambia ante 是 (shì)?',
        options: [
          'Originalmente es 4.to tono y cambia a 2.do tono (bú) ante otro 4.to tono',
          'Originalmente es 1.er tono y cambia a 3.er tono',
          'No cambia jamás de tono',
          'Pasa a tono neutro en cualquier posición'
        ],
        correctIndex: 0,
        explanation: '不 es 4.to tono por naturaleza, pero ante otro 4.to tono como shì, se suaviza a 2.do tono (bú shì).'
      },
      {
        id: 'q8',
        section: 'phonetics',
        type: 'multiple_choice',
        question: 'Sección 2: Fonética y Tonos. ¿Cuál de los siguientes grupos de consonantes chinas requiere una fuerte expulsión de aire (aspiradas)?',
        options: [
          'P, T, K, Q, CH',
          'B, D, G, J, ZH',
          'M, N, L, R',
          'F, S, SH, H'
        ],
        correctIndex: 0,
        explanation: 'Las consonantes aspiradas expulsan una bocanada de aire audible: P, T, K, Q, CH (mueven la hoja de papel).'
      },
      {
        id: 'q9',
        section: 'phonetics',
        type: 'multiple_choice',
        question: 'Sección 2: Fonética y Tonos. ¿Cómo se articula correctamente la vocal especial ü (como en nǚ - mujer)?',
        options: [
          'Poniendo los labios redondos de "U" y pronunciando el sonido de la "I"',
          'Abriendo la boca grande como la "A"',
          'Vibrando la lengua como la "RR"',
          'Emitiendo un sonido gutural desde el pecho'
        ],
        correctIndex: 0,
        explanation: 'La vocal ü se forma fijando la posición labial de "U" mientras la lengua produce la "I".'
      },
      {
        id: 'q10',
        section: 'phonetics',
        type: 'multiple_choice',
        question: 'Sección 2: Fonética y Tonos. ¿Qué tipo de tono lleva la partícula interrogativa 吗 (ma) y la partícula posesiva 的 (de)?',
        options: [
          'Tono Neutro (ligero, corto y átono)',
          '1.er tono alto y constante',
          '3.er tono grave descendente',
          '4.to tono enérgico'
        ],
        correctIndex: 0,
        explanation: 'Tanto 吗 como 的 carecen de acento diacrítico tonal; son sílabas átonas de tono neutro.'
      },

      // SECCIÓN 3: GRAMÁTICA Y SINTAXIS (5 PREGUNTAS)
      {
        id: 'q11',
        section: 'grammar',
        type: 'multiple_choice',
        question: 'Sección 3: Gramática y Sintaxis. ¿Cuál de las siguientes oraciones es correcta para decir "Ella es muy hermosa"?',
        options: [
          '她很漂亮 (Tā hěn piàoliang)',
          '她是漂亮 (Tā shì piàoliang)',
          '她是有很漂亮 (Tā shì yǒu hěn piàoliang)',
          '她是很好看人 (Tā shì hěn hǎokàn rén)'
        ],
        correctIndex: 0,
        explanation: 'En chino los predicados adjetivales no usan el verbo 是; se conectan directamente con 很.'
      },
      {
        id: 'q12',
        section: 'grammar',
        type: 'multiple_choice',
        question: 'Sección 3: Gramática y Sintaxis. ¿Cómo se niega gramaticalmente el verbo 有 (yǒu - tener)?',
        options: [
          'Únicamente con 没有 (méiyǒu)',
          'Con 不有 (bù yǒu)',
          'Con 无有 (wú yǒu)',
          'Con 不是 (bú shì)'
        ],
        correctIndex: 0,
        explanation: '有 nunca jamás admite 不; su única negación admisible es 没有.'
      },
      {
        id: 'q13',
        section: 'grammar',
        type: 'multiple_choice',
        question: 'Sección 3: Gramática y Sintaxis. ¿Cuál es el orden obligatorio al expresar el lugar donde ocurre una acción?',
        options: [
          'Sujeto + 在 Lugar + Verbo + Objeto (el lugar va ANTES del verbo)',
          'Sujeto + Verbo + Objeto + 在 Lugar (como en español)',
          '在 Lugar + Sujeto + Objeto + Verbo',
          'Verbo + Sujeto + 在 Lugar'
        ],
        correctIndex: 0,
        explanation: 'Regla fundamental: en chino el escenario de la acción (在 Lugar) se coloca siempre antes de que suceda el verbo.'
      },
      {
        id: 'q14',
        section: 'grammar',
        type: 'multiple_choice',
        question: 'Sección 3: Gramática y Sintaxis. ¿Cómo se cuantifican correctamente "tres libros" en chino?',
        options: [
          '三本书 (Sān běn shū)',
          '三个书 (Sān gè shū)',
          '三书 (Sān shū)',
          '三块书 (Sān kuài shū)'
        ],
        correctIndex: 0,
        explanation: 'Los libros exigen el clasificador específico 本 (běn): 三本书.'
      },
      {
        id: 'q15',
        section: 'grammar',
        type: 'multiple_choice',
        question: 'Sección 3: Gramática y Sintaxis. Para decir "las dos personas" o "las 2:00 en punto", ¿qué palabra se debe usar?',
        options: [
          '两 (liǎng) delante de clasificadores y horas',
          '二 (èr) en todos los casos',
          '双 (shuāng) exclusivamente',
          '第二 (dì èr)'
        ],
        correctIndex: 0,
        explanation: 'Delante de palabras de medida y horas se emplea obligatoriamente 两 (liǎng gè rén, liǎng diǎn).'
      },

      // SECCIÓN 4: LECTURA DE CARACTERES HANZI Y COMPRENSIÓN (5 PREGUNTAS)
      {
        id: 'q16',
        section: 'reading',
        type: 'multiple_choice',
        promptHanzi: '明天是星期天，我不去学校。',
        question: 'Sección 4: Lectura Hanzi. Lee el texto en caracteres y responde: ¿Qué hará la persona mañana?',
        options: [
          'No irá a la escuela porque es domingo',
          'Irá a la escuela a estudiar con sus compañeros',
          'Irá a comprar libros al hospital',
          'Trabajará en un restaurante chino'
        ],
        correctIndex: 0,
        explanation: '明天是星期天 (Mañana es domingo), 我不去学校 (Yo no voy a la escuela).'
      },
      {
        id: 'q17',
        section: 'reading',
        type: 'multiple_choice',
        promptHanzi: '这个苹果五块钱，我想买三个。',
        question: 'Sección 4: Lectura Hanzi. ¿Cuánto dinero gastará en total según el texto?',
        options: [
          '15 yuanes (3 manzanas a 5 yuanes cada una)',
          '5 yuanes en total',
          '8 yuanes en total',
          '3 yuanes en total'
        ],
        correctIndex: 0,
        explanation: 'Cada manzana cuesta 5 yuanes (五块钱) y quiere 3 (买三个): 5 x 3 = 15 yuanes (十五块).'
      },
      {
        id: 'q18',
        section: 'reading',
        type: 'multiple_choice',
        promptHanzi: '我爸爸是医生，他在北京的一家医院工作。',
        question: 'Sección 4: Lectura Hanzi. ¿A qué se dedica el padre y dónde labora?',
        options: [
          'Es médico y trabaja en un hospital de Pekín',
          'Es profesor y enseña en una escuela de Shanghái',
          'Es taxista y conduce en Pekín',
          'Es cocinero en un restaurante famoso'
        ],
        correctIndex: 0,
        explanation: '我爸爸是医生 (Mi papá es médico), 他在北京的一家医院工作 (trabaja en un hospital en Pekín).'
      },
      {
        id: 'q19',
        section: 'reading',
        type: 'multiple_choice',
        promptHanzi: '李老师的女儿今年七岁了，她很漂亮。',
        question: 'Sección 4: Lectura Hanzi. ¿Cuántos años tiene la hija del profesor Li?',
        options: [
          '7 años',
          '17 años',
          '6 años',
          '8 años'
        ],
        correctIndex: 0,
        explanation: '七岁 (qī suì) = 7 años de edad.'
      },
      {
        id: 'q20',
        section: 'reading',
        type: 'multiple_choice',
        promptHanzi: '对不起，我不会说汉语，我会说西班牙语。',
        question: 'Sección 4: Lectura Hanzi. ¿Qué idioma declara hablar la persona?',
        options: [
          'Habla español pero no sabe hablar chino',
          'Habla chino mandarín y también español',
          'No sabe hablar ningún idioma extranjero',
          'Sabe escribir caracteres chinos pero no hablar'
        ],
        correctIndex: 0,
        explanation: '我不会说汉语 (No sé hablar chino), 我会说西班牙语 (Sé hablar español).'
      }
    ]
  }
};
