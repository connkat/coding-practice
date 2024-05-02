## Missed a bunch, whoops

## Deep learning
### Human neural network
- Neurons fire in response to eletro-chemical stimuli
- WHen fired, the signal is passed to the connected neurons

### Artificial neural netowkr
- Each neuron is a function that operates on an input value (x) and a weight (w)
- the function is wrapped in an activation function that determines where tho pass the output

### Neural network ex: multi-class classification
- EX: measuring penguins 
1. put in measurements as inputs (x)
2. add it to the function f(x,w)
3. it will return in the target classification  (y)
3. This will give probability of which type penguin classifcaion it might be.

## Azure 
- WHat is Azure ML?
   - cloud based platform for ML, 
   - user interfce for accessing tooling
   MLM trained with AML can be published as services
   - AI application resources for specific services
        - Consumed by applications via a REST endpoint (https:address.com) and an auth key/token

## Convolutional Neural Networks
1. Labeled images are used to train the model
2. Filter layers extract feature maps from each image
3. The feature maps are flattened
4. The feature values are fed into a fully connected neural network (CNN)
5. The output layers produces a probability value for each possible class label
- During training, the filter kernals start with random weights. These weights are iteratively adjusted to improve...

## Multi-modal models
- A newer approach to modelling involves combining language and vision models to encode image and text data
- The model encapsulates sematic relationships between features extracted from images and text extracted from related captions. 
A multi-modal model can be used as a <b>foundation</b> model for more specialized adaptive models.

## Computer vision services in Azure
### Visions
- Image analysis: image tagging, captions, model customization, and more
- Optical Character Recognition (OCR)
- Spatial analysis

### Face
- Face detections
- Face recognition
- Ex: attendance, detecting gender
- Anyone can access blue, exposure, noise, occlusion but only managed accounts can use identity verification and similarity matching 

### OCR (optical character recognition)
- can tag and categorize text


## Natural language processing
1. Raw Text
2. Preprocessing
    - Tokenization
3. Training Language model
    - Text analysis
    - Opinion mining
    - Machine translation
    - Summarization
    - Chat AI

### Natural Language processing and conversation AT in Azure

- Language
    - Language detected
    - Key phrase detected
    - Named entity detection
    - Sentiment analysis and opinion mining
    - Personal information detecting
    - Summarization
    - Question answering
    - Conversational language understanding
    - more
- Speech
    - Tech to speech
    - Speech to text
    - speech translation
    - Speaker identification
    - language identification
- Translator
    - text translation
    - Doc translation
    - CUstom translation

### Conversational language understanding
1. Utterance: "switch the light on"
2. Entity: light
3. Intent: turn on

## Azure AI Search
1. Ingest:
    - Azure blob storage containers
    - ASQL DB Docs in Cosmos DB
    - Azure Data Lake Storage 
2. AI enrichment & index
    - AI enables deeper understanding
    - Extract info and patterns
    - Azure AI services
    - Vision, Natural Language, Processing
    - Indexing makes content searchable
3. Explore
    - Search perform on indexes
    - Results used within the search itself

### AI enrichment
In Azure AI Search: 
    - AI enrichment makes content more useful for search purposes
    - Enriched content is created by skillsets that: 
        - recognize entities in text
        - translate test
        - evaluate sentiment
    - A skillset produces enriched documents
        - consumed during indexing
        - projected to a knowledge store
    - Serialized data is passed to the search engine for indexing
    - Knowledge sore
        - Data sink created by the AI Search enrichment pipeline

## Generative AI 
- AI: imitates human behaviour by using ML to interact with the env and execute tasks without explicit directions.
- Generative: creates original content, such as Generative AI that has application. GAI application take in natural language input and return appropriate responses in a variety of formats (Natural language generation, image generation, code generation)