use anchor_lang::prelude::*;

declare_id!("TQDy38CR1UyHnwP8eGL1tKdNjDjRRH5AdhGiUXuYqtH");

#[program]
pub mod task_marketplace {
    use super::*;
    
    pub fn create_task(ctx: Context<CreateTask>, title: String, description: String, duration: i64, reward_amount: u64) -> Result<()> {
        let task = &mut ctx.accounts.task;
        task.owner = *ctx.accounts.owner.key;
        task.title = title;
        task.description = description;
        task.duration = duration;
        task.reward_amount = reward_amount;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateTask<'info> {
    #[account(init, payer = owner, space = 8 + 64 + 64 + 8 + 8 + 8)]
    pub task: Account<'info, Task>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Task {
    pub owner: Pubkey,
    pub title: String,
    pub description: String,
    pub duration: i64,
    pub reward_amount: u64,
}

#[derive(Accounts)]
pub struct Initialize {}
