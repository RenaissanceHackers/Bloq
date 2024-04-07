use anchor_lang::prelude::*;

declare_id!("TQDy38CR1UyHnwP8eGL1tKdNjDjRRH5AdhGiUXuYqtH");

#[program]
pub mod blockchain {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
