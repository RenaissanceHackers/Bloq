const anchor = require("@coral-xyz/anchor");
const assert = require("assert");

describe("task_marketplace", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env(); // This line is updated
  anchor.setProvider(provider);

  it("Can create a task", async () => {
    const program = anchor.workspace.taskmarketplace;
    const task = anchor.web3.Keypair.generate();

    await program.rpc.createTask(
      "Test Task",
      "This is a test description.",
      new anchor.BN(86400), // Duration: 1 day in seconds
      new anchor.BN(1000), // Reward amount
      {
        accounts: {
          task: task.publicKey,
          owner: provider.wallet.publicKey, // Use provider.wallet
          systemProgram: anchor.web3.SystemProgram.programId,
        },
        signers: [task],
      }
    );

    // Fetch the newly created task account from the blockchain.
    const taskAccount = await program.account.task.fetch(task.publicKey);

    // Perform some basic assertions to ensure the task was created correctly.
    assert.ok(taskAccount.title === "Test Task");
    assert.ok(taskAccount.description === "This is a test description.");
    assert.ok(taskAccount.duration.eq(new anchor.BN(86400)));
    assert.ok(taskAccount.rewardAmount.eq(new anchor.BN(1000)));
  });
});
