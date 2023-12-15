const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: '1',
  brokers: ['localhost:9092'],
});

async function sendMessage(message) {
  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'topic-2',
    messages: [{ value: message }],
  });

  await producer.disconnect();
}

module.exports = {
  sendMessage,
};
