const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: '1',
  brokers: ['localhost:9092'],
});

async function receiveMessage(groupId, topic) {
  const consumer = kafka.consumer({ groupId });

  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString(),
      });
    },
  });
}

// Se tiver usando meu exemplo
// precisa abrir dois terminais e executar esse arquivo com node.

receiveMessage('a', 'topic-2');

module.exports = {
  receiveMessage,
};
