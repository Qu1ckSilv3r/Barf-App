package de.barf.controller;

public class ResetPasswordDto {
	String resetPassword;
	String newPassword;
	
	public ResetPasswordDto() {
		
	}

	public ResetPasswordDto(String resetPassword, String newPassword) {
		super();
		this.resetPassword = resetPassword;
		this.newPassword = newPassword;
	}

	public String getResetPassword() {
		return resetPassword;
	}

	public void setResetPassword(String resetPassword) {
		this.resetPassword = resetPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((newPassword == null) ? 0 : newPassword.hashCode());
		result = prime * result + ((resetPassword == null) ? 0 : resetPassword.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ResetPasswordDto other = (ResetPasswordDto) obj;
		if (newPassword == null) {
			if (other.newPassword != null)
				return false;
		} else if (!newPassword.equals(other.newPassword))
			return false;
		if (resetPassword == null) {
			if (other.resetPassword != null)
				return false;
		} else if (!resetPassword.equals(other.resetPassword))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ResetPasswordDto [resetPassword=" + resetPassword + ", newPassword=" + newPassword + "]";
	}
	
}
